import dayjs from 'dayjs';
import { html, nothing } from 'lit-html';
import { declensionOfNumbers, formatDuration, prettifyNumbers } from '../utils/helpers';
import AbstractView from './abstract-view';

const formatFilmDescription = (text, maxChars = 140) => {
  if (text.length > maxChars) {
    return `${text.slice(0, maxChars)}...`;
  }

  return text;
};

const cardTemplate = (film) => {
  const commentsCountTemplate = html`
    <span class="film-card__comments">
      ${prettifyNumbers(film.commentsCounts)} ${declensionOfNumbers(film.commentsCounts, ['comment', 'comments', 'comments'])}
    </span>
  `;

  const filmDescription = film.description ? html`<p class="film-card__description">${formatFilmDescription(film.description)}</p>` : nothing;

  const filmYear = film.year ? html`<span class="film-card__year">${dayjs(film.year).format('YYYY')}</span>` : nothing;

  return html`
    <article class="film-card">
      <a class="film-card__link">
        <h3 class="film-card__title">${film.title}</h3>
        <p class="film-card__rating">${film.rating}</p>
        <p class="film-card__info">
          ${filmYear}
          <span class="film-card__duration">${formatDuration(film.duration)}</span>
          <span class="film-card__genre">${film.genre}</span>
        </p>

        <img src="${film.cover}" alt="" class="film-card__poster">

        ${filmDescription}

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
      return nothing;
    }

    return cardTemplate(this.#film);
  }
}
