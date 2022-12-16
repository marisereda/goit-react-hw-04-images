import PropTypes from 'prop-types';

import React, { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { Box } from 'components/Box';
import { Form, Button, SearchInput } from 'components/SearchBar';
import { theme } from 'constants/theme';

export const SearchBar = ({ onSearchSubmit }) => {
  const [search, setSearch] = useState('');

  // --------------------------------
  const handleSubmit = e => {
    e.preventDefault();
    onSearchSubmit(search);
  };

  // --------------------------------
  const handleInputChange = e => {
    setSearch(e.target.value);
  };

  return (
    <Box
      top={0}
      left={0}
      position=" sticky"
      zIndex="searchBar"
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="searchBar"
      paddingRight={5}
      paddingLeft={5}
      paddingTop={4}
      paddingBottom={4}
      color="textPrimary"
      backgroundColor="bgSearchBar"
      boxShadow="primary"
      as="header"
    >
      <Form onSubmit={handleSubmit}>
        <Button type="submit">
          <ImSearch size={theme.sizes.iconSearch} />
        </Button>
        <SearchInput
          type="text"
          aria-label="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleInputChange}
          value={search}
        />
      </Form>
    </Box>
  );
};

SearchBar.propTypes = {
  onSearchSubmit: PropTypes.func.isRequired,
};
