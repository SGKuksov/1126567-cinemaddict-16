import dayjs from 'dayjs';
import { EMOJIES } from '../constants';
import AbstractView from './abstract-view';

const commentTemplate = (comment) => `
<li class="film-details__comment">
  <span class="film-details__comment-emoji">
    <img src="${EMOJIES[comment.emoji].src}" width="55" height="55" alt="${EMOJIES[comment.emoji].alt}">
  </span>

  <div>
    <p class="film-details__comment-text">${comment.text}</p>

    <p class="film-details__comment-info">
      <span class="film-details__comment-author">${comment.author}</span>
      ${comment.date ? `<span class="film-details__comment-day">${dayjs(comment.date).format('YYYY/MM/DD HH:mm')}</span>` : ''}
      <button class="film-details__comment-delete">Delete</button>
    </p>
  </div>
</li>
`;

export default class CommentView extends AbstractView {
  #comment = null;

  constructor(comment) {
    super();

    this.#comment = comment;
  }

  get template() {
    if (!this.#comment) {
      return '';
    }

    return commentTemplate(this.#comment);
  }
}
