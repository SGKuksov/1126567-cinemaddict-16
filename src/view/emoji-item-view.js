import AbstractView from './abstract-view';

const emojiItemTemplate = ({ id, name }) => `
<input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="${id}" value="${name}">
<label class="film-details__emoji-label" for="${id}">
  <img src="./images/emoji/${name}.png" width="30" height="30" alt="emoji">
</label>
`;

export default class EmojiItemView extends AbstractView {
  #emojiItem = null;

  constructor(emojiItem) {
    super();

    this.#emojiItem = emojiItem;
  }

  get template() {
    if (!this.#emojiItem) {
      return '';
    }

    return emojiItemTemplate(this.#emojiItem);
  }
}
