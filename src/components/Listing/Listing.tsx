import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Listing.module.scss';

interface ListingProps {
  title: string;
  body: string;
  imageUrl: string;
  price: number;
  tags: string[];
}

const Listing: React.FC<ListingProps> = ({ title, body, imageUrl, price, tags }) => {
  const [isImageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={styles.listingContainer}>
      <div className={styles.imageWrapper}>
        {!isImageLoaded && <div className={styles.shimmer}></div>}
        <Image
          src={imageUrl}
          alt={`An image of ${title}`}
          className={`${styles.image} ${isImageLoaded ? styles.visible : ''}`}
          width={500}
          height={300}
          onLoadingComplete={() => setImageLoaded(true)}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.body}>{body}</p>
        <div className={styles.tags}>
          {tags.slice(0,2).map((tag, index) => (
            <span key={index} className={styles.tag}>
              #{tag}
            </span>
          ))}
        </div>
        <p className={styles.price}>${price}</p>
      </div>
    </div>
  );
};

export default Listing;
