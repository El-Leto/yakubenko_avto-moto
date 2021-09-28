import React from 'react';
import logo from '../../images/logo.svg';
import styles from './logo.module.scss';

function Logo() {
  return (
    <div>
      <a className={styles.link}>
        <img src={logo} alt="Auto-moto logo" width="134" height="55"/>
      </a>
    </div>
  );
}

export default Logo;
