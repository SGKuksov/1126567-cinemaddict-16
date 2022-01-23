import { html } from 'lit-html';
import AbstractView from './abstract-view';

const catalogTemplate = (templates = []) => html`
<section class="films">
  ${templates}
</section>
`;

export default class CatalogView extends AbstractView {
  #templates = [];

  constructor(templates = []) {
    super();

    this.#templates = templates;
  }

  get template() {
    return catalogTemplate(this.#templates);
  }
}
