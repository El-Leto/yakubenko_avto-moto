import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import ReactStars from 'react-rating-stars-component';
import cn from 'classnames';
import { addReview } from '../../store/action';
import { MIN_LENGTH } from '../../const';
import styles from './modal.module.scss';

const Input = {
  NAME: 'name',
  GOOD: 'good',
  BAD: 'bad',
  COMMENT: 'comment',
  RATING: 'rating',
};

function Modal({ isOpen, onModalOpen }) {
  const storage = localStorage.getItem('form');
  const initState = storage ? JSON.parse(storage) : {
    [Input.NAME]: '',
    [Input.GOOD]: '',
    [Input.BAD]: '',
    [Input.COMMENT]: '',
    [Input.RATING]: 0,
  };

  const [form, setForm] = useState(initState);
  const [nameWrong, setNameWrong] = useState(false);
  const [commentWrong, setCommentWrong] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('form', JSON.stringify(form));
  }, [form]);

  const handleInputChange = (evt) => {
    const {name, value} = evt.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleRatingChange = (value) => {
    setForm({
      ...form,
      [Input.RATING]: value,
    });
  };

  const handleButtonClick = (evt) => {
    evt.preventDefault();

    const name = form[Input.NAME];
    const comment = form[Input.COMMENT];

    const isNameValid = name.trim().length >= MIN_LENGTH;
    const isCommentValid = comment.trim().length >= MIN_LENGTH;

    if (!isNameValid) {
      setNameWrong(true);
      return;
    }

    if (!isCommentValid) {
      setCommentWrong(true);
      return;
    }

    setNameWrong(false);
    setCommentWrong(false);

    dispatch(addReview({
      ...form,
      id: Math.random().toFixed(3),
    }));
    onModalOpen(false);
    localStorage.clear();
  };

  return (
    <div>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={() => onModalOpen(false)}
        className={styles.modal}
        style={{ overlay: { background: 'rgba(88, 87, 87, 0.6)' } }}
        autoFocus={false}
        ariaHideApp={false}
      >
        <div className={styles.header}>
          <h2 className={styles.title}>Оставить отзыв</h2>
          <button
            type="button"
            onClick={() => onModalOpen(false)}
            className={styles.close}
            aria-label="Закрыть"
          ><span className='visually-hidden'>Закрыть</span>
          </button>
        </div>
        <form
          onSubmit={handleButtonClick}
          className={styles.form}
        >
          <div className={styles.wrapper}>
            <label className={styles.name}>
              {
                nameWrong && <span className={styles.notice}>Пожалуйста, заполните поле</span>
              }
              <input
                type="text"
                className={styles.input}
                name={Input.NAME}
                value={form[Input.NAME]}
                placeholder="Имя"
                aria-label="Имя"
                onChange={handleInputChange}
                autoFocus
              >
              </input>
            </label>
            <label>
              <input
                type="text"
                className={styles.input}
                name={Input.GOOD}
                value={form[Input.GOOD]}
                placeholder="Достоинства"
                aria-label="Достоинства"
                onChange={handleInputChange}
              >
              </input>
            </label>
            <label>
              <input
                type="text"
                className={styles.input}
                name={Input.BAD}
                value={form[Input.BAD]}
                placeholder="Недостатки"
                aria-label="Недостатки"
                onChange={handleInputChange}
              >
              </input>
            </label>
          </div>
          <div className={cn(styles.wrapper, styles.comment)}>
            <div className={styles.rating}>
              <span className={styles.rating_title}>Оцените товар:</span>
              <ReactStars
                classNames={styles.stars}
                a11y
                count={5}
                size={35}
                color2={'#d12136'}
                value={form[Input.RATING]}
                half={false}
                onChange={(value) => handleRatingChange(value)}
              />
            </div>
            <div className={styles.text}>
              {
                commentWrong && <span className={styles.notice}>Пожалуйста, заполните поле</span>
              }
              <label>
                <textarea
                  className={styles.textarea}
                  name={Input.COMMENT}
                  value={form[Input.COMMENT]}
                  placeholder="Комментарий"
                  aria-label="Комментарий"
                  cols='20'
                  rows='5'
                  onChange={handleInputChange}
                >
                </textarea>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className={cn('button', styles.button)}
            aria-label="Оставить отзыв"
          >
          Оставить отзыв
          </button>
        </form>
      </ReactModal>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onModalOpen: PropTypes.func.isRequired,
};

export default Modal;
