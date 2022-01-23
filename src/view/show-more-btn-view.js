import AbstractView from './abstract-view';

const showMoreBtnTemplate = (content) => `
<button class="films-list__show-more" data-btn="show-more">${content}</button>
`;

export default class ShowMoreBtnView extends AbstractView {
  #content = null;

  constructor(content = 'Show more') {
    super();

    this.#content = content;
  }

  get template() {
    return showMoreBtnTemplate(this.#content);
  }
}
