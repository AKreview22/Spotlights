"use client";

import React, { useEffect } from 'react';
import Header from '@/components/Header/Header';
import PostGrid from '@/components/PostGrid/PostGrid';
import SearchBar from '@/components/SearchBar/SearchBar';
import Sortion from '@/components/Sortion/Sortion';
import { usePostStore } from '@/stores/postStore';
import styles from './page.module.scss';
import { FaRegFrown } from 'react-icons/fa';

const Home: React.FC = () => {
  const { filteredPosts, status, loadPosts, setFilteredPosts, sortPosts } = usePostStore();

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  const handleSearch = (query: string) => {
    setFilteredPosts(query);
  };

  const handleSort = (order: 'unsorted' | 'asc' | 'desc') => {
    sortPosts(order);
  };

  const noPostsAvailable = filteredPosts.length === 0 && status !== 'loading';

  return (
    <>
      <Header />
      <div className={styles.controlPanel}>
        <Sortion onSort={handleSort} />
        <SearchBar onSearch={handleSearch} />
      </div>
      {noPostsAvailable ? (
        <div className={styles['no-favorites-container']}>
        <FaRegFrown size={48} className={styles['no-favorites-icon']} />
        <p className={styles['no-favorites-text']}>No posts found!</p>
      </div>
            ) : (
        <PostGrid posts={filteredPosts} loading={status === 'loading'} />
      )}
    </>
  );
};

export default Home;
