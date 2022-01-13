import { getRandomInteger } from './utils';

export const generateCounters = () => ({
  watchlistCounter: getRandomInteger(1, 50),
  historyCounter: getRandomInteger(1, 50),
  favoritesCounter: getRandomInteger(1, 50)
});
