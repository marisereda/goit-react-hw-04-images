import React, { useState, useEffect, useRef } from 'react';
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

const STATUS = {
  idle: 0,
  pending: 1,
  resolved: 2,
  rejected: 3,
};

export const App = () => {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState('');
  const [totalImages, setTotalImages] = useState(0);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState(STATUS.idle);
  const [isScrollUp, setIsScrollUp] = useState(false);

  let isFirstLoading = useRef(true);

  // --------------------------------
  useEffect(() => {
    const handleScroll = throttle(
      () => setIsScrollUp(window.scrollY > window.innerHeight),
      300
    );
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // --------------------------------
  useEffect(() => {
    if (isFirstLoading.current) {
      isFirstLoading.current = false;
      return;
    }

    async function manageSearch() {
      if (!search) {
        return;
      }
      setStatus(STATUS.pending);
      try {
        const response = await getImages(search, page);
        setImages(prevImages => [...prevImages, ...response.hits]);
        setStatus(STATUS.resolved);
        setTotalImages(response.totalHits);
      } catch (error) {
        toast(error.message);
        setStatus(STATUS.rejected);
      }
    }

    manageSearch();
  }, [search, page]);

  // --------------------------------
  const handleSearch = newSearch => {
    if (!newSearch || search === newSearch) {
      return;
    }

    setImages([]);
    setTotalImages(0);
    setPage(1);
    setStatus(STATUS.idle);
    setIsScrollUp(false);
    setSearch(newSearch);
  };

  return (
    <Box paddingBottom={5}>
      <SearchBar onSearchSubmit={handleSearch} />
      <Box padding={6} as="main">
        <ImageGallery images={images} />

        {status === STATUS.pending && <Loader />}

        {status === STATUS.resolved && images.length < totalImages && (
          <Button onClick={setPage} page={page} />
        )}

        {isScrollUp && <ScrollUp onClick={() => scrollTo(0)} />}
      </Box>
      <ToastContainer />
      <GlobalStyle />
    </Box>
  );
};
