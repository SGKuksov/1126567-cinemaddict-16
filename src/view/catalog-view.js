import AbstractView from './abstract-view';

export const catalogTemplate = ({ templates = [] }) => `
<section class="films">
  ${templates.join('')}
</section>
`;

export default class CatalogView extends AbstractView {
  #templates = [];

  constructor(templates) {
    super();

    this.#templates = templates;
  }

  get template() {
    return catalogTemplate({ templates: this.#templates });
  }
}
