import React from 'react';
import { specifications } from '../../const';
import styles from './specifications.module.scss';

function Specifications() {
  return (
    <div className={styles.container}>
      <dl className={styles.list}>
        {
          Object.entries(specifications).map(([text, desc]) => (
            <div className={styles.item} key={text}>
              <dt>{text}</dt>
              <dd className={styles.desc}>{desc}</dd>
            </div>
          ))
        }
      </dl>
    </div>
  );
}

export default Specifications;
