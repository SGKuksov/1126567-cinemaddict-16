import { html, nothing } from 'lit-html';
import CardView from './card-view';
import AbstractView from './abstract-view';

const listTemplate = ({ title, extraClass }, cards = [], btn = '') => html`
<section class="films-list ${extraClass}" data-catalog>
  <h2 class="films-list__title visually-hidden">${title}</h2>

  <div class="films-list__container" data-container="films">
    ${cards.map((card) => new CardView(card).template)}
  </div>

  ${btn}
</section>
`;

export default class ListView extends AbstractView {
  #options = null;
  #cards = [];
  #btn = null;

  constructor(options, cards = [], btn) {
    super();

    this.#options = options;
    this.#cards = cards;
    this.#btn = btn;
  }

  get template() {
    if (!this.#options) {
      return nothing;
    }

    return listTemplate(this.#options, this.#cards, this.#btn);
  }
}
