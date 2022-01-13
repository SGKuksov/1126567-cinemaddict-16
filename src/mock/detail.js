import { nanoid } from 'nanoid';
import { generateDate, generateRandomText, getRandomBoolean, getRandomInteger } from './utils';
import { generateComments } from './comments';

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

const AGE_RATING = [
  '+0',
  '+6',
  '+12',
  '+16',
  '+18'
];

const PERSONS = [
  'Anthony Mann',
  'Anne Wigton',
  'Heinz Herald',
  'Richard Weil',
  'Erich von Stroheim',
  'Mary Beth Hughes',
  'Dan Duryea',
];

const COUNTRIES = ['USA', 'Russia', 'China'];

const COMMENT_COUNT = 11;

export const generateDetail = () => ({
  id: nanoid(4),
  title: generateRandomText(TITLES),
  originalTitle: generateRandomText(TITLES),
  description: generateRandomText(DESCRIPTIONS),
  cover: `./images/posters/${generateRandomText(COVERS)}`,
  rating: getRandomInteger(10, 100) / 10,
  ageRating: generateRandomText(AGE_RATING),
  release: generateDate(),
  duration: getRandomInteger(10, 200),
  genres: [generateRandomText(GENRES), generateRandomText(GENRES), generateRandomText(GENRES)],
  director: [generateRandomText(PERSONS)],
  writers: [generateRandomText(PERSONS), generateRandomText(PERSONS)],
  actors: [generateRandomText(PERSONS), generateRandomText(PERSONS)],
  country: [generateRandomText(COUNTRIES)],
  comments: Array.from({ length: COMMENT_COUNT }, generateComments),
  isFavorites: getRandomBoolean(),
  isWatched: getRandomBoolean(),
  hasInWatchList: getRandomBoolean(),
});
