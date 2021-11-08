import React, {useState} from 'react';
import cn from 'classnames';
import auto1 from '../../images/auto1.jpg';
import auto2 from '../../images/auto2.jpg';
import auto3 from '../../images/auto3.jpg';
import { DEFAULT_SLIDE } from '../../const';
import styles from './slider.module.scss';

const slides = [auto1, auto2, auto3];

function Slider() {
  const [selectedSlide, setSelectedSlide] = useState(DEFAULT_SLIDE);

  const handleNextButtonClick = (evt) => {
    evt.preventDefault();

    const slide = selectedSlide + 1;

    setSelectedSlide(slide);
  };

  const handlePreviousButtonClick = (evt) => {
    evt.preventDefault();

    const slide = selectedSlide - 1;

    setSelectedSlide(slide);
  };

  return (
    <div className={styles.container}>
      <span className={styles.pin}>New model</span>
      <img
        className={styles.image}
        src={slides[selectedSlide]}
        alt="Auto-moto logo"
        width="600"
        height="375"
      />
      <div className={styles.slider}>
        <button
          className={cn(styles.button, styles.button_left)}
          onClick={handlePreviousButtonClick}
          disabled={selectedSlide === 0}
          aria-label="Назад"
        >
          <span className='visually-hidden'>Кнопка слайдера назад</span>
        </button>
        <img
          className={styles.slide}
          src={auto1}
          alt="Фото автомобиля"
          width="128"
          height="80"
        />
        <img
          className={styles.slide}
          src={auto2}
          alt="Фото автомобиля"
          width="128"
          height="80"
        />
        <img
          className={styles.slide}
          src={auto3}
          alt="Фото автомобиля"
          width="128"
          height="80"
        />
        <button
          className={cn(styles.button, styles.button_right)}
          onClick={handleNextButtonClick}
          disabled={selectedSlide === slides.length - 1}
          aria-label="Вперед"
        >
          <span className='visually-hidden'>Кнопка слайдера вперед</span>
        </button>
      </div>
    </div>
  );
}

export default Slider;
