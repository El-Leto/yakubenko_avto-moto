import { createReducer } from '@reduxjs/toolkit';
import { addReview } from '../action';

const initialState = {
  reviews: [
    {
      id: 1,
      name: 'Борис Иванов',
      good: 'мощность, внешний вид',
      bad: 'Слабые тормозные колодки (пришлось заменить)',
      comment: 'Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.',
      rating: 3,
    },
    {
      id: 2,
      name: 'Марсель Исмагилов',
      good: 'Стиль, комфорт, управляемость',
      bad: 'Дорогой ремонт и обслуживание',
      comment: 'Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.',
      rating: 3,
    },
  ],
};

const data = createReducer(initialState, (builder) => {
  builder
    .addCase(addReview, (state, { payload }) => {
      state.reviews.push(payload);
    });
});

export { data };