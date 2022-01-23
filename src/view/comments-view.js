import EmojiItemView from './emoji-item-view';
import AbstractView from './abstract-view';
import CommentView from './comment-view';
import { EMOJI_LIST } from '../constants';

const commentsTemplate = (comments = []) => `
<section class="film-details__comments-wrap">
  <h3 class="film-details__comments-title">
    Comments <span class="film-details__comments-count">${comments.length}</span>
  </h3>

  <ul class="film-details__comments-list">
    ${comments.map((comment) => new CommentView(comment).template).join('')}
  </ul>

  <div class="film-details__new-comment">
    <div class="film-details__add-emoji-label"></div>

    <label class="film-details__comment-label">
      <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
    </label>

    <div class="film-details__emoji-list">
      ${EMOJI_LIST.map((item) => new EmojiItemView(item).template).join('')}
    </div>
  </div>
</section>
`;

export default class CommentsView extends AbstractView {
  #comments = [];

  constructor(comments = []) {
    super();

    this.#comments = comments;
  }

  get template() {
    if (!this.#comments) {
      return '';
    }

    return commentsTemplate(this.#comments);
  }
}
