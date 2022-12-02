import { GalleryItem, Image } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  static defaultProps = {
    webformatURL: '',
    largeImageURL: '',
  };

  static propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  };

  state = {
    isModalOpen: false,
  };

  onOpen = () => {
    this.setState({ isModalOpen: true });
  };

  onClose = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen } = this.state;
    const { webformatURL, largeImageURL } = this.props;
    return (
      <>
        <GalleryItem>
          <Image src={webformatURL} alt={webformatURL} onClick={this.onOpen} />
        </GalleryItem>
        {isModalOpen && (
          <Modal url={largeImageURL} onModalClose={this.onClose} />
        )}
      </>
    );
  }
}
