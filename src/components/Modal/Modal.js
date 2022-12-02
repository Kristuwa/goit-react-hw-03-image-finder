import { Overlay, ModalContainer } from './Modal.styled';
import PropTypes from 'prop-types';
import { Component } from 'react';

export class Modal extends Component {
  static defaultProps = {
    url: '',
    onModalClose: null,
  };

  static propTypes = {
    url: PropTypes.string.isRequired,
    onModalClose: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onCloseEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onCloseEsc);
  }

  onCloseEsc = e => {
    if (e.code === 'Escape') {
      this.props.onModalClose();
    }
  };

  onCloseBackdrop = e => {
    if (e.currentTarget === e.target) {
      this.props.onModalClose();
    }
  };

  render() {
    const { url } = this.props;
    return (
      <Overlay onClick={this.onCloseBackdrop}>
        <ModalContainer>
          <img src={url} alt={url} width="900" height="680" />
        </ModalContainer>
      </Overlay>
    );
  }
}
