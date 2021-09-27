import React from 'react';
import Header from '../header/header';
import Slider from '../slider/slider';
import Info from '../info/info';
import Tabs from '../tabs/tabs';
import Footer from '../footer/footer';
import styles from './main-page.module.scss';

function MainPage() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <h1 className="visually-hidden">Автомобиль Марпех 11</h1>
        <section className={styles.container}>
          <Slider className={styles.sliders}/>
          <Info className={styles.info}/>
          <Tabs className={styles.tabs}/>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default MainPage;
