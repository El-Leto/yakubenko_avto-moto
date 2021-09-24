import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './main-page.module.scss';

function MainPage() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main></main>
      <Footer />
    </div>
  );
}

export default MainPage;
