import { nanoid } from 'nanoid';
import { generateRandomText } from './utils';

const RATING = [
  '',
  'novice',
  'fan',
  'movie buff'
];

export const generateUser = () => ({
  id: nanoid(4),
  rating: generateRandomText(RATING),
  avatar: 'https://picsum.photos/35',
});
