import AbstractView from './abstract-view';

const mainTemplate = (templates = []) => `
<main class="main">
  ${templates.join('')}
</main>
`;

export default class MainView extends AbstractView {
  #templates = [];

  constructor(templates = []) {
    super();

    this.#templates = templates;
  }

  get template() {
    return mainTemplate(this.#templates);
  }
}
