import React from 'react';
import { Post as PostType } from '@/types/Post';
import styles from './PostGrid.module.scss';
import SkeletonPostCard from '@/components/SkeletonPostCard/SkeletonPostCard';
import Post from '@/components/Post/Post';

interface PostGridProps {
  posts: PostType[];
  loading: boolean;
}

const PostGrid: React.FC<PostGridProps> = ({ posts, loading }) => {
  return (
    <div className={styles.gridContainer}>
      {loading
        ? Array.from({ length: 15 }).map((_, index) => <SkeletonPostCard key={index} />)
        : posts.map((post: PostType) => <Post key={post.id} post={post} />)
      }
    </div>
  );
};

export default PostGrid;
