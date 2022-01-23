import CardView from './card-view';
import { showMoreBtnTemplate } from './show-more-btn-template';
import AbstractView from './abstract-view';

export const listTemplate = ({ title, extraClass, hasShowMoreBtn }, cards = []) => `
<section class="films-list ${extraClass}" ${hasShowMoreBtn ? 'data-catalog' : ''}>
  <h2 class="films-list__title visually-hidden">${title}</h2>

  <div class="films-list__container" data-container="films">
    ${cards.map((card) => new CardView(card).template).join('')}
  </div>

  ${hasShowMoreBtn ? showMoreBtnTemplate() : ''}
</section>
`;

export default class ListView extends AbstractView {
  #options = null;
  #cards = [];

  constructor(options, cards = []) {
    super();

    this.#options = options;
    this.#cards = cards;
  }

  get template() {
    if (!this.#options) {
      return '';
    }

    return listTemplate(this.#options, this.#cards);
  }
}
