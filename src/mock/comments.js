import { nanoid } from 'nanoid';
import { generateDate, generateRandomText } from './utils';

const AUTHORS = [
  'Tim Macoveev',
  'John Doe',
  'John Macoveev',
  'Tim Doe'
];

const EMOJIES = [
  'smile',
  'sleeping',
  'puke',
  'angry'
];

const COMMENTS_TEXTS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id orci ut lectus varius viverra. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.',
  'Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis.'
];

export const generateComments = () => ({
  id: nanoid(4),
  emoji: generateRandomText(EMOJIES),
  author: generateRandomText(AUTHORS),
  text: generateRandomText(COMMENTS_TEXTS),
  date: generateDate()
});
