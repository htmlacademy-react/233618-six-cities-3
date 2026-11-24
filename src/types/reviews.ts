import type { User } from './user';

type Review = {
  id: string;
  comment: string;
  date: string;
  rating: number;
  user: User;
};

export type { Review };
