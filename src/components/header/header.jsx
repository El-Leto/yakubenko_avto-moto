import React, { useState } from 'react';
import cn from 'classnames';
import Logo from '../logo/logo';
import styles from './header.module.scss';

function Header() {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleButtonClick = (evt) => {
    evt.preventDefault();
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <Logo />
        <button
          className={isNavOpen ? cn(styles.toggle, styles.toggle_open) : cn(styles.toggle, styles.toggle_close)}
          onClick={handleButtonClick}
        >
          <span className="visually-hidden">Открыть меню</span>
        </button>
        <nav className={isNavOpen ? styles.nav_open : styles.nav_close}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a className={styles.link} href="/">
                Автомобили
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="/">
                Контакты
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="/">
                Услуги
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="/">
                Вакансии
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
