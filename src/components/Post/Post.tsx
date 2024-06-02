import React, { useState, useEffect } from 'react';
import { Post as PostType } from '@/types/Post';
import styles from './Post.module.scss';
import { toast } from 'sonner';
import { addFavoritePost, removeFavoritePost, isFavoritePost } from '@/utils/favLocalStorage';
import Avatar from '@/components/Avatar/Avatar';
import Interactions from '@/components/Interactions/Interactions';
import Listing from '@/components/Listing/Listing';

interface PostProps {
  post: PostType;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (isFavoritePost(post.id)) {
      setIsLiked(true);
    }
  }, [post.id]);

  const handleFavoriteToggle = () => {
    try {
      if (isFavoritePost(post.id)) {
        removeFavoritePost(post.id);
        setIsLiked(false);
        toast.success('Removed from favorites');
      } else {
        addFavoritePost(post);
        setIsLiked(true);
        toast.success('Added to favorites');
      }
    } catch (error) {
      toast.error('Failed to update favorites');
    }
  };

  return (
    <div className={styles.postContainer}>
      <div className={styles.avatarContainer}>
        <Avatar imageUrl={post.user.imageUrl} name={post.user.name} />
      </div>
      <div className={styles.listingContainer}>
        <Listing 
          title={post.title} 
          body={post.body} 
          imageUrl={post.imageUrl} 
          price={post.price} 
          tags={post.tags} 
        />
      </div>
      <div className={styles.interactionsContainer}>
        <Interactions 
          likesCount={post.likesCount} 
          commentsCount={post.commentsCount} 
          isLiked={isLiked} 
          onFavoriteToggle={handleFavoriteToggle}
        />
      </div>
    </div>
  );
};

export default Post;
