import AbstractView from './abstract-view';
import { html } from 'lit-html';

const mainTemplate = (templates = []) => html`
<main class="main">
  ${templates}
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
