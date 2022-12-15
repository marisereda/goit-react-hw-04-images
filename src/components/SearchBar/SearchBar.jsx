import PropTypes from 'prop-types';

import React, { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { Box } from 'components/Box';
import { Form, Button, SearchInput } from 'components/SearchBar';
import { theme } from 'constants/theme';

export class SearchBar extends Component {
  static propTypes = {
    onSearchSubmit: PropTypes.func.isRequired,
  };

  state = {
    search: '',
  };

  // --------------------------------
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.search);
  };

  // --------------------------------
  handleInputChange = e => {
    this.setState({ search: e.target.value });
  };

  // --------------------------------
  render() {
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
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">
            <ImSearch size={theme.sizes.iconSearch} />
          </Button>
          <SearchInput
            type="text"
            aria-label="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
            value={this.state.search}
          />
        </Form>
      </Box>
    );
  }
}
