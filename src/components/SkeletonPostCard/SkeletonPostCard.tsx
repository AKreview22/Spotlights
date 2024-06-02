import React from 'react';
import styles from './SkeletonPostCard.module.scss';

const SkeletonPostCard: React.FC = () => {
  return (
    <div className={styles['skeleton-card']}>
      <div className={`${styles.skeleton} ${styles['skeleton-avatar']}`} />
      <div className={`${styles.skeleton} ${styles['skeleton-title']}`} />
      <div className={`${styles.skeleton} ${styles['skeleton-description']}`} />

      <div className={styles['skeleton-image']} />

      <div className={styles['skeleton-tags']}>
        <div className={`${styles.skeleton} ${styles['skeleton-tag']}`} />
        <div className={`${styles.skeleton} ${styles['skeleton-tag']}`} />
        <div className={`${styles.skeleton} ${styles['skeleton-tag']}`} />
      </div>
      <div className={`${styles.skeleton} ${styles['skeleton-price']}`} />
      <div className={styles['skeleton-stats']}>
        <div className={`${styles.skeleton} ${styles['skeleton-stat']}`} />
        <div className={`${styles.skeleton} ${styles['skeleton-stat']}`} />
      </div>
    </div>
  );
};

export default SkeletonPostCard;
