import { html } from 'lit-html';
import AbstractView from './abstract-view';

const detailTemplate = (topTemplates = [], bottomTemplates = []) => html`
<section class="film-details" style="display: none;">
  <form class="film-details__inner" action="" method="get">
    <div class="film-details__top-container">
      <div class="film-details__close">
        <button class="film-details__close-btn" type="button">close</button>
      </div>

      ${topTemplates}
    </div>

    <div class="film-details__bottom-container">
      ${bottomTemplates}
    </div>
  </form>
</section>
`;

export default class DetailView extends AbstractView {
  #topTemplates = [];
  #bottomTemplates = [];

  constructor(topTemplates = [], bottomTemplates = []) {
    super();

    this.#topTemplates = topTemplates;
    this.#bottomTemplates = bottomTemplates;
  }

  get template() {
    return detailTemplate(this.#topTemplates, this.#bottomTemplates);
  }
}
