import React from 'react';
import cn from 'classnames';
import styles from './info.module.scss';

function Info() {
  return (
    <div>
      <h2 className={styles.title}>Марпех 11</h2>
      <ul className={styles.list}>
        <li className={cn(styles.item, styles.gas)}>бензин</li>
        <li className={cn(styles.item, styles.mechanics)}>механика</li>
        <li className={cn(styles.item, styles.power)}>100 л.с.</li>
        <li className={cn(styles.item, styles.engine)}>1.4 л</li>
      </ul>
      <div className={styles.prices}>
        <span className={styles.price}>2 300 000 &#8381;</span>
        <span className={styles.old_price}>2 400 000 &#8381;</span>
      </div>
      <div className={styles.buttons}>
        <a className={cn(styles.button, styles.request)} href="/">Оставить заявку</a>
        <a className={cn(styles.button, styles.credit)} href="/">В кредит от 11 000 &#8381;</a>
      </div>
    </div>
  );
}

export default Info;
