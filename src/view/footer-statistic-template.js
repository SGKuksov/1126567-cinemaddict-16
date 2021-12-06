import { declensionOfNumbers, prettifyNumbers } from '../utils/helpers';

export const footerStatisticTemplate = (count = 0) => {
  const prettifiedCount = prettifyNumbers(count);
  const prettifiedWord = declensionOfNumbers(count, ['movie', 'movies', 'movies']);

  return count !== 0 ? `<p>${prettifiedCount} ${prettifiedWord} inside</p>` : '';
};
