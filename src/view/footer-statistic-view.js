import { html, nothing } from 'lit-html';
import { declensionOfNumbers, prettifyNumbers } from '../utils/helpers';
import AbstractView from './abstract-view';

const footerStatisticTemplate = (count = 0) => {
  if (!Number.isInteger(count) || count === 0) {
    return nothing;
  }

  const prettifiedCount = prettifyNumbers(count);
  const prettifiedWord = declensionOfNumbers(count, ['movie', 'movies', 'movies']);

  return html`<p>${prettifiedCount} ${prettifiedWord} inside</p>`;
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
