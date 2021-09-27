import React from 'react';
import { useSelector } from 'react-redux';
import Review from '../review/review';
import styles from './reviews.module.scss';

function Reviews() {

  const reviews = useSelector((state) => state.reviews);

  return (
    <div className={styles.container}>
      <a className={styles.button} href="/">
        Оставить отзыв
      </a>
      <ul className={styles.list}>
        {
          reviews.map((review) => (
            <Review review={review} key={review.id}/>
          ))
        }
      </ul>
    </div>
  );
}

export default Reviews;
