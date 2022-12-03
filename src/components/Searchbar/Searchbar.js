import {
  ButtonSearch,
  Header,
  SearchForm,
  SearchFormInput,
} from './Searchbar.styled';
import { Formik } from 'formik';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
  const initialValues = {
    searchWord: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    if (values.searchWord.trim() === '') {
      alert('Enter valid text');
      return;
    }
    onSubmit(values.searchWord.toLowerCase());
  };

  return (
    <Header>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <SearchForm autoComplete="of">
          <ButtonSearch type="submit">
            <span>Search</span>
          </ButtonSearch>
          <label htmlFor="searchWord"></label>
          <SearchFormInput
            id="searchWord"
            type="text"
            autoFocus
            name="searchWord"
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Formik>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
