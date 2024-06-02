"use client";

import React, { useEffect, useState } from 'react';
import { Post as PostType } from '@/types/Post';
import PostGrid from '@/components/PostGrid/PostGrid';
import { FaRegFrown } from 'react-icons/fa';
import { getFavoritePosts } from '@/utils/favLocalStorage';
import styles from './page.module.scss';

const FavoritesPage: React.FC = () => {
  const [favoritePosts, setFavoritePosts] = useState<PostType[]>([]);

  useEffect(() => {
    const favoritePosts = getFavoritePosts();
    setFavoritePosts(favoritePosts.reverse());
  }, []);

  return (
    <>
      {favoritePosts.length > 0 ? (
        <PostGrid posts={favoritePosts} loading={false} />
      ) : (
        <div className={styles['no-favorites-container']}>
          <FaRegFrown size={48} className={styles['no-favorites-icon']} />
          <p className={styles['no-favorites-text']}>No favorite posts yet!</p>
        </div>
      )}
    </>
  );
};

export default FavoritesPage;
