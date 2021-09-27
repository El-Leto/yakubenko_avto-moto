import React from 'react';
import YandexMap from '../yandex-map/yandex-map';
import styles from './contacts.module.scss';

function Contacts() {

  return (
    <div className={styles.container}>
      <div className={styles.contacts}>
        <dl className={styles.list}>
          <div className={styles.item}>
            <dt className={styles.text}>Адрес</dt>
            <dd className={styles.desc}>Санкт-Петербург,<br />набережная реки Карповки, дом 5</dd>
          </div>
          <div className={styles.item}>
            <dt className={styles.text}>Режим работы</dt>
            <dd className={styles.desc}>Ежедневно, с 10:00 до 21:00</dd>
          </div>
          <div className={styles.item}>
            <dt className={styles.text}>Телефон</dt>
            <dd className={styles.desc}>8 (800) 333-55-99</dd>
          </div>
          <div className={styles.item}>
            <dt className={styles.text}>E-mail</dt>
            <dd className={styles.desc}>info@avto-moto.ru</dd>
          </div>
        </dl>
      </div>
      <div className={styles.map}>
        <YandexMap />
      </div>
    </div>
  );
}

export default Contacts;
