import { nanoid } from 'nanoid';
import {generateDate, generateRandomText, getRandomBoolean, getRandomInteger} from './utils';

const TITLES = [
  'The Dance of Life',
  'Sagebrush Trail',
  'The Man with the Golden Arm',
  'Santa Claus Conquers the Martians',
  'Popeye the Sailor Meets Sindbad the Sailor'
];

const DESCRIPTIONS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id orci ut lectus varius viverra. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.',
  'Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis.'
];

const COVERS = [
  'made-for-each-other.png',
  'popeye-meets-sinbad.png',
  'sagebrush-trail.jpg',
];

const GENRES = [
  'Western',
  'Musical',
  'Drama',
  'Comedy',
  'Cartoon',
  'Mystery'
];

export const generateFilm = () => ({
  id: nanoid(4),
  title: generateRandomText(TITLES),
  description: generateRandomText(DESCRIPTIONS),
  cover: `./images/posters/${generateRandomText(COVERS)}`,
  rating: getRandomInteger(10, 100) / 10,
  year: generateDate(),
  duration: getRandomInteger(10, 200),
  genre: generateRandomText(GENRES),
  commentsCounts: getRandomInteger(0, 12),
  isFavorites: getRandomBoolean(),
  isWatched: getRandomBoolean(),
  hasInWatchList: getRandomBoolean(),
});
