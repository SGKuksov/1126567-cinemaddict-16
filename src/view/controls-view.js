import AbstractView from './abstract-view';

const controlsTemplate = (detail) => `
<section class="film-details__controls">
  <button
    type="button"
    class="film-details__control-button ${detail.isFavorites ? 'film-details__control-button--active' : ''} film-details__control-button--watchlist"
    id="watchlist"
    name="watchlist">Add to watchlist</button>

  <button
    type="button"
    class="film-details__control-button ${detail.isWatched ? 'film-details__control-button--active' : ''} film-details__control-button--watched"
    id="watched"
    name="watched">Already watched</button>

  <button
    type="button"
    class="film-details__control-button ${detail.hasInWatchList ? 'film-details__control-button--active' : ''} film-details__control-button--favorite"
    id="favorite"
    name="favorite">Add to favorites</button>
</section>
`;

export default class ControlsView extends AbstractView {
  #detail = null;

  constructor(detail) {
    super();

    this.#detail = detail;
  }

  get template() {
    if (!this.#detail) {
      return '';
    }

    return controlsTemplate(this.#detail);
  }
}
