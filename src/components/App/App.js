import { Container, Text } from './App.styled';
import { Searchbar } from 'components/Searchbar';
import { Component } from 'react';
import * as API from '../../services/api';
import { ImageGallery } from 'components/ImageGallery';
import { Loader } from 'components/Loader';
import { Button } from 'components/Button';
import { Notification } from 'components/Notification';

export class App extends Component {
  state = {
    searchWord: '',
    gallery: [],
    page: 1,
    error: null,
    status: 'idle',
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.searchWord !== this.state.searchWord ||
      prevState.page !== this.state.page
    ) {
      const { searchWord, page } = this.state;
      try {
        this.setState({ status: 'pending' });
        const gallery = await API.fetchApiGallery(searchWord, page);
        this.setState({ gallery, status: 'resolved' });
      } catch (error) {
        this.setState({ error: true, status: 'rejected' });
      }
    }
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  onSubmit = async e => {
    if (e.searchWord.trim() === '') {
      alert('Enter valid text');
      return;
    }
    this.setState({ searchWord: e.searchWord.toLowerCase(), page: 1 });
  };

  render() {
    const { gallery, status, error } = this.state;
    console.log(gallery);
    return (
      <>
        <Container>
          <Searchbar onSubmit={this.onSubmit} />
        </Container>
        {status === 'idle' && <Text>Enter keyword</Text>}
        {status === 'pending' && <Loader />}
        {status === 'resolved' && gallery.length > 0 && (
          <Container>
            <ImageGallery gallery={gallery} />
            <Button onClick={this.loadMore} />
          </Container>
        )}
        {status === 'resolved' && gallery.length === 0 && (
          <Notification message={'Nothing found for your request'} />
        )}
        {status === 'rejected' && <Notification message={error.message} />}
      </>
    );
  }
}
