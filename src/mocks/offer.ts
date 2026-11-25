import type { FullOffer } from '../types/offers';

const offer: FullOffer = {
  id: 'a855f568-851c-4e19-8e2a-b3375f34fb5a',
  title: 'Amazing and Extremely Central Flat',
  description:
    'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
  type: 'room',
  price: 120,
  images: [
    'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
    'https://15.design.htmlacademy.pro/static/hotel/15.jpg',
    'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
    'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
    'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
    'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
  ],
  city: {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13,
    },
  },
  location: {
    latitude: 52.36554,
    longitude: 4.911976,
    zoom: 16,
  },
  goods: [
    'Towels',
    'Wi-Fi',
    'Washer',
    'Fridge',
    'Dishwasher',
    'Cable TV',
    'Heating',
    'Laptop friendly workspace',
    'Kitchen',
    'Washing machine',
  ],
  host: {
    isPro: true,
    name: 'Angelina',
    avatarUrl:
      'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg',
  },
  isPremium: true,
  isFavorite: false,
  rating: 3.2,
  bedrooms: 1,
  maxAdults: 3,
};

export { offer };
