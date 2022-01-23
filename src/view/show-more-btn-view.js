import AbstractView from './abstract-view';

const showMoreBtnTemplate = (content = 'Show more') => `
<button class="films-list__show-more" data-btn="show-more">${content}</button>
`;

export default class showMoreBtnView extends AbstractView {
  #content = null;

  constructor(content) {
    super();

    this.#content = content;
  }

  get template() {
    if (!this.#content) {
      return '';
    }

    return showMoreBtnTemplate(this.#content);
  }
}
