const PERCENT_IN_ONE_RATING = 20;

const getRatingInPercent = (rating) => `${Math.round(rating) * PERCENT_IN_ONE_RATING}%`;

export { getRatingInPercent };
