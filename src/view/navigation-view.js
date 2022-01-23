import AbstractView from './abstract-view';

const navigationTemplate = (counters) => `
<nav class="main-navigation">
  <div class="main-navigation__items">
    <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
    <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${counters.watchlistCounter}</span></a>
    <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${counters.historyCounter}</span></a>
    <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${counters.favoritesCounter}</span></a>
  </div>

  <a href="#stats" class="main-navigation__additional">Stats</a>
</nav>
`;

export default class NavigationView extends AbstractView {
  #counters = null;

  constructor(counters) {
    super();

    this.#counters = counters;
  }

  get template() {
    if (!this.#counters) {
      return '';
    }

    return navigationTemplate(this.#counters);
  }
}
