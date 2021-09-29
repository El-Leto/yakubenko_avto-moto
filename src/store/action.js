import { createAction } from '@reduxjs/toolkit';

const ActionsType = {
  ADD_REVIEW: 'data/addReview',
};

const addReview = createAction(ActionsType.ADD_REVIEW, (payload) => ({
  payload,
}));

export { addReview };
