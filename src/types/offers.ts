import type { CITIES } from '../const';
import type { User } from './user';

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type City = {
  name: (typeof CITIES)[number];
  location: Location;
};

type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

type FullOffer = Omit<Offer, 'previewImage'> & {
  description: string;
  images: string[];
  goods: string[];
  host: User;
  bedrooms: number;
  maxAdults: number;
};

export type { Offer, FullOffer, City };
