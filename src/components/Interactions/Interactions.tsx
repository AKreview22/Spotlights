import React from 'react';
import { FaHeart, FaRegHeart, FaComment, FaThumbsUp } from 'react-icons/fa';
import styles from './Interactions.module.scss';

interface InteractionsProps {
  likesCount: number;
  commentsCount: number;
  isLiked: boolean;
  onFavoriteToggle: () => void;
}

const Interactions: React.FC<InteractionsProps> = ({ likesCount, commentsCount, isLiked, onFavoriteToggle }) => {
  return (
    <div className={styles.interactionsContainer}>
      <div className={styles.infoLeft}>
        <div className={styles.infoItem}>
          <FaThumbsUp />
          <span>{likesCount}</span>
        </div>
        <div className={styles.infoItem}>
          <FaComment />
          <span>{commentsCount}</span>
        </div>
      </div>
      <button onClick={onFavoriteToggle} className={styles.likeButton}>
        {isLiked ? <FaHeart /> : <FaRegHeart />}
      </button>
    </div>
  );
};

export default Interactions;
