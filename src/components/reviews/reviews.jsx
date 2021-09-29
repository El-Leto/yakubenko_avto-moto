import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import cn from 'classnames';
import Review from '../review/review';
import Modal from '../modal/modal';
import styles from './reviews.module.scss';

function Reviews() {

  const reviews = useSelector((state) => state.reviews);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = (evt) => {
    evt.preventDefault();

    setIsModalOpen(true);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '17px';
    }

    if (!isModalOpen) {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0';
    }
  }, [isModalOpen]);

  return (
    <div className={styles.container}>
      <a
        className={cn('button', styles.review)}
        href="/"
        onClick={handleButtonClick}
      >
        Оставить отзыв
      </a>
      <ul className={styles.list}>
        {
          reviews.map((review) => (
            <Review review={review} key={review.id}/>
          ))
        }
      </ul>
      {isModalOpen && <Modal isOpen={isModalOpen} onModalOpen={setIsModalOpen}/>}
    </div>
  );
}

export default Reviews;
