import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { getRatingInPercent } from '../../utils';
import styles from './review.module.scss';


function Review({ review }) {
  const {name, good, bad, comment, rating} = review;

  const placeRating = getRatingInPercent(rating);

  return (
    <li className={styles.review}>
      <h3 className={styles.author}>{name}</h3>
      <div className={cn(styles.item, styles.good)}>
        <p className={styles.title}>Достоинства</p>
        <p className={styles.desc}>{good}</p>
      </div>
      <div className={cn(styles.item, styles.bad)}>
        <p className={styles.title}>Недостатки</p>
        <p className={styles.desc}>{bad}</p>
      </div>
      <div className={cn(styles.item, styles.comment)}>
        <p className={styles.title}>Комментарий</p>
        <p className={styles.desc}>{comment}</p>
      </div>
      <div className={styles.rating}>
        <div className={styles.active}>
          <span className="visually-hidden">Rating</span>
          <span style={{width: placeRating}} className={styles.stars}></span>
        </div>
        <span className={styles.text}>Советует</span>
      </div>
      <div>
        <time dateTime={new Date()} className={styles.time}>1 минуту назад</time>
        <button type="button" className={styles.reply}>Ответить</button>
      </div>
    </li>
  );
}

Review.propTypes = {
  review: PropTypes.shape({
    name: PropTypes.string.isRequired,
    good: PropTypes.string.isRequired,
    bad: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }),
};

export default Review;
