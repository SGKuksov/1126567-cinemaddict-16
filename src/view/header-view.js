import AbstractView from './abstract-view';

const headerTemplate = (templates = []) => `
<header class="header">
  <h1 class="header__logo logo">Cinemaddict</h1>

  ${templates.join('')}
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
