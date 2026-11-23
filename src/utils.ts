const calcRatingPercent = (rating: number): string =>
  ((Math.floor(rating) / 5) * 100).toString();

export { calcRatingPercent };
