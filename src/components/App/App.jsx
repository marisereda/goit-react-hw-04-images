import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { throttle } from 'lodash';

import { GlobalStyle } from 'components/GlobalStyle';
import { Box } from 'components/Box';
import { SearchBar } from 'components/SearchBar';
import { ImageGallery } from 'components/ImageGallery';
import { Button } from 'components/Button';
import { Loader } from 'components/Loader';
import { ScrollUp } from 'components/ScrollUp';
import { getImages, scrollTo } from 'utils';

const status = {
  idle: 0,
  pending: 1,
  resolved: 2,
  rejected: 3,
};

export class App extends Component {
  state = {
    images: [],
    search: '',
    totalImages: 0,
    page: 1,
    status: status.idle,
    isScrollUp: false,
  };

  // --------------------------------
  async componentDidMount() {
    window.addEventListener('scroll', throttle(this.handleScroll), 300);
  }

  // --------------------------------
  async componentDidUpdate(_, prevState) {
    const { search, page } = this.state;

    if (prevState.search !== search || prevState.page !== page) {
      this.setState({ status: status.pending });
      try {
        const response = await getImages(search, page);
        this.setState(prevState => ({
          images: [...prevState.images, ...response.hits],
          status: status.resolved,
          totalImages: response.totalHits,
        }));
      } catch (error) {
        toast(error.message);
        this.setState({ status: status.rejected });
        return;
      }
    }
  }

  // --------------------------------
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  // --------------------------------
  handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      this.setState(prevState => {
        if (!prevState.isScrollUp) {
          return { isScrollUp: true };
        }
      });
    } else {
      this.setState(prevState => {
        if (prevState.isScrollUp) {
          return { isScrollUp: false };
        }
      });
    }
  };

  // --------------------------------
  handleSearch = search => {
    this.setState(prevState => {
      if (prevState.search !== search) {
        this.setState({
          images: [],
          totalImages: 0,
          page: 1,
          status: status.idle,
          isScrollUp: false,
          search,
        });
      } else return;
    });
  };

  // --------------------------------
  handleClickLoadMore = page => {
    this.setState({ page });
  };

  // --------------------------------
  handleClickScrollUp = () => {
    scrollTo(0);
  };

  // --------------------------------
  render() {
    return (
      <Box paddingBottom={5}>
        <SearchBar onSearchSubmit={this.handleSearch} />
        <Box padding={6} as="main">
          <ImageGallery images={this.state.images} />

          {this.state.status === status.pending && <Loader />}

          {this.state.status === status.resolved &&
            this.state.images.length < this.state.totalImages && (
              <Button
                onClick={this.handleClickLoadMore}
                page={this.state.page}
              />
            )}

          {this.state.isScrollUp && (
            <ScrollUp onClick={this.handleClickScrollUp} />
          )}
        </Box>
        <ToastContainer />
        <GlobalStyle />
      </Box>
    );
  }
}
