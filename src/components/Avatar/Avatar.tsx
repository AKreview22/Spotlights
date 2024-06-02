import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Avatar.module.scss';

interface AvatarProps {
  imageUrl: string;
  name: string;
}

const Avatar: React.FC<AvatarProps> = ({ imageUrl, name }) => {
  const [isImageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={styles.avatarContainer}>
      <div className={styles.avatarImageWrapper}>
        {!isImageLoaded && <div className={styles.shimmer}></div>}
        <Image
          src={imageUrl}
          alt={`Profile Picture for ${name}`}
          className={`${styles.avatarImage} ${isImageLoaded ? styles.visible : ''}`}
          width={100}
          height={100}
          onLoadingComplete={() => setImageLoaded(true)}
        />
      </div>
      <span className={styles.username}>{name}</span>
    </div>
  );
};

export default Avatar;
