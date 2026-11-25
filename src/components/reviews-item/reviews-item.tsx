import type { Review } from '../../types/reviews';
import { calcRatingPercent } from '../../utils';
import dayjs from 'dayjs';

type ReviewsItemProps = {
  review: Review;
};

function ReviewsItem({ review }: ReviewsItemProps) {
  const {
    comment,
    date,
    rating,
    user: { name, avatarUrl },
  } = review;

  const dateTime = dayjs(date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${calcRatingPercent(rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time
          className="reviews__time"
          dateTime={dateTime.format('YYYY-MM-DD')}
        >
          {dateTime.format('MMMM DD')}
        </time>
      </div>
    </li>
  );
}
export default ReviewsItem;
