import { Review } from '../types/reviews';

const reviews: Review[] = [
  {
    id: 'f57fe1e8-c73f-4ef0-b071-33623e5ce3be',
    comment: 'I stayed here for one night and it was an unpleasant experience.',
    date: '2026-10-31T21:00:00.212Z',
    rating: 5,
    user: {
      name: 'Jack',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/5.jpg',
      isPro: false,
    },
  },
  {
    id: '1c6c8806-f727-4073-af6b-8bb947fc62b6',
    comment:
      'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)',
    date: '2026-10-31T21:00:00.212Z',
    rating: 4,
    user: {
      name: 'Max',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/7.jpg',
      isPro: true,
    },
  },
  {
    id: '8271e9df-8a70-4fde-914b-d61e851edc8e',
    comment:
      'The room was spacious and clean. The pool looked nothing like the photos and desparately needs a clean. The sauna and spa were closed for lunar new year holiday.',
    date: '2026-10-30T21:00:00.212Z',
    rating: 3,
    user: {
      name: 'Mollie',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/1.jpg',
      isPro: false,
    },
  },
];

export { reviews };
