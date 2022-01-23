import { declensionOfNumbers, prettifyNumbers } from '../utils/helpers';
import AbstractView from './abstract-view';

const footerStatisticTemplate = (count = 0) => {
  if (!Number.isInteger(count)) {
    return '';
  }

  const prettifiedCount = prettifyNumbers(count);
  const prettifiedWord = declensionOfNumbers(count, ['movie', 'movies', 'movies']);

  return count !== 0 ? `<p>${prettifiedCount} ${prettifiedWord} inside</p>` : '';
};

export default class FooterStatisticView extends AbstractView {
  #totalCount = 0;

  constructor(count) {
    super();
    this.#totalCount = count;
  }

  get template() {
    return footerStatisticTemplate(this.#totalCount);
  }
}
