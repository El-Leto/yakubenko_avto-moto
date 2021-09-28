import React from 'react';
import logo from '../../images/logo.svg';
import styles from './logo.module.scss';

function Logo() {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="Auto-moto logo" width="134" height="55"/>
    </div>
  );
}

export default Logo;
