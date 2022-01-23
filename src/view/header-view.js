import { html } from 'lit-html';
import AbstractView from './abstract-view';

const headerTemplate = (templates = []) => html`
<header class="header">
  <h1 class="header__logo logo">Cinemaddict</h1>

  ${templates}
</header>
`;

export default class HeaderView extends AbstractView {
  #templates = [];

  constructor(templates = []) {
    super();

    this.#templates = templates;
  }

  get template() {
    return headerTemplate(this.#templates);
  }
}
