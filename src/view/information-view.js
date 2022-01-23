import dayjs from 'dayjs';
import { formatDuration } from '../utils/helpers';
import AbstractView from './abstract-view';

const informationTemplate = (detail) => `
<div class="film-details__info-wrap">
  <div class="film-details__poster">
    <img class="film-details__poster-img" src="${detail.cover}" alt="">

    <p class="film-details__age">${detail.ageRating}</p>
  </div>

  <div class="film-details__info">
    <div class="film-details__info-head">
      <div class="film-details__title-wrap">
        <h3 class="film-details__title">${detail.title}</h3>
        <p class="film-details__title-original">Original: ${detail.originalTitle}</p>
      </div>

      <div class="film-details__rating">
        <p class="film-details__total-rating">${detail.rating}</p>
      </div>
    </div>

    <table class="film-details__table">
      <tr class="film-details__row">
        <td class="film-details__term">Director</td>
        <td class="film-details__cell">${detail.director.join(',')}</td>
      </tr>
      <tr class="film-details__row">
        <td class="film-details__term">Writers</td>
        <td class="film-details__cell">${detail.writers.join(',')}</td>
      </tr>
      <tr class="film-details__row">
        <td class="film-details__term">Actors</td>
        <td class="film-details__cell">${detail.actors.join(',')}</td>
      </tr>
      <tr class="film-details__row">
        <td class="film-details__term">Release Date</td>
        <td class="film-details__cell">${dayjs(detail.release).format('DD MMMM YYYY')}</td>
      </tr>
      <tr class="film-details__row">
        <td class="film-details__term">Runtime</td>
        <td class="film-details__cell">${formatDuration(detail.duration)}</td>
      </tr>
      <tr class="film-details__row">
        <td class="film-details__term">Country</td>
        <td class="film-details__cell">${detail.country.join(',')}</td>
      </tr>
      <tr class="film-details__row">
        <td class="film-details__term">Genres</td>
        <td class="film-details__cell">
            ${detail.genres.map((genre) => `<span class="film-details__genre">${genre}</span>`).join(',')}
        </td>
      </tr>
    </table>

    <p class="film-details__film-description">${detail.description}</p>
  </div>
</div>
`;

export default class InformationView extends AbstractView {
  #detail = [];

  constructor(detail) {
    super();

    this.#detail = detail;
  }

  get template() {
    if (!this.#detail) {
      return '';
    }

    return informationTemplate(this.#detail);
  }
}
