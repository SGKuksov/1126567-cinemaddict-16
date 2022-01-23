import dayjs from 'dayjs';
import { declensionOfNumbers, formatDuration, prettifyNumbers } from '../utils/helpers';
import AbstractView from './abstract-view.js';

const formatFilmDescription = (text, maxChars = 140) => {
  if (text.length > maxChars) {
    return `${text.slice(0, maxChars)}...`;
  }

  return text;
};

export const cardTemplate = (film) => {
  const commentsCountTemplate = `
    <span class="film-card__comments">
      ${prettifyNumbers(film.commentsCounts)} ${declensionOfNumbers(film.commentsCounts, ['comment', 'comments', 'comments'])}
    </span>
  `;
  const filmDescription = formatFilmDescription(film.description);

  return`
  <article class="film-card">
    <a class="film-card__link">
      <h3 class="film-card__title">${film.title}</h3>
      <p class="film-card__rating">${film.rating}</p>
      <p class="film-card__info">
        ${film.year ? `<span class="film-card__year">${dayjs(film.year).format('YYYY')}</span>` : ''}
        <span class="film-card__duration">${formatDuration(film.duration)}</span>
        <span class="film-card__genre">${film.genre}</span>
      </p>

      <img src="${film.cover}" alt="" class="film-card__poster">

      ${filmDescription ? `<p class="film-card__description">${filmDescription}</p>` : ''}

      ${commentsCountTemplate}
    </a>

    <div class="film-card__controls">
      <button
        class="film-card__controls-item ${film.isFavorites ? 'film-card__controls-item--active' : ''} film-card__controls-item--add-to-watchlist"
        type="button"
      >Add to watchlist</button>
      <button
        class="film-card__controls-item ${film.isWatched ? 'film-card__controls-item--active' : ''} film-card__controls-item--mark-as-watched"
        type="button"
      >Mark as watched</button>
      <button
        class="film-card__controls-item ${film.hasInWatchList ? 'film-card__controls-item--active' : ''} film-card__controls-item--favorite"
        type="button"
      >Mark as favorite</button>
    </div>
  </article>
`;
};

export default class CardView extends AbstractView {
  #film = null;

  constructor(film) {
    super();

    this.#film = film;
  }

  get template() {
    if (!this.#film) {
      return '';
    }

    return cardTemplate(this.#film);
  }
}
