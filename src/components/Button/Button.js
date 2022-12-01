import { ButtonLoadMore } from './Button.styled.js';

export const Button = ({ onClick }) => {
  return (
    <ButtonLoadMore type="button" onClick={onClick}>
      Load more
    </ButtonLoadMore>
  );
};
