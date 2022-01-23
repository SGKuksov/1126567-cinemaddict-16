import { renderTemplate } from './utils/render';
import {
  generateFilm,
  generateCounters,
  generateUser,
  generateDetail,
  getRandomInteger
} from './mock';

import CardView from './view/card-view';
import CatalogView from './view/catalog-view';
import CommentsView from './view/comments-view';
import ControlsView from './view/controls-view';
import DetailView from './view/detail-view';
import FilterView from './view/filter-view';
import FooterStatisticView from './view/footer-statistic-view';
import FooterView from './view/footer-view';
import HeaderView from './view/header-view';
import InformationView from './view/information-view';
import ListView from './view/list-view';
import MainView from './view/main-view';
import NavigationView from './view/navigation-view';
import ShowMoreBtnView from './view/show-more-btn-view';
import UserView from './view/user-view';

const FILM_COUNT = 20;
const FILM_COUNT_PER_STEP = 5;
const FILM_EXTRA_COUNT_PER_STEP = 2;
const FILM_TOTAL_COUNT = getRandomInteger(100, 55555);

const films = Array.from({ length: FILM_COUNT }, generateFilm);
const counters = generateCounters();
const user = generateUser();
const detail = generateDetail();

renderTemplate([
  new HeaderView([
    new UserView(user).template
  ]).template,

  new MainView([
    new NavigationView(counters).template,

    new FilterView().template,

    new CatalogView([
      new ListView(
        {
          title: 'All movies. Upcoming',
          extraClass: '',
        },
        films.slice(0, FILM_COUNT_PER_STEP),
        new ShowMoreBtnView().template,
      ).template,

      new ListView(
        {
          title: 'Top rated',
          extraClass: 'films-list--extra',
        },
        films.slice(0, FILM_EXTRA_COUNT_PER_STEP)
      ).template,

      new ListView(
        {
          title: 'Most commented',
          extraClass: 'films-list--extra',
        },
        films.slice(0, FILM_EXTRA_COUNT_PER_STEP)
      ).template,
    ]).template,
  ]).template,

  new DetailView(
    [new InformationView(detail).template, new ControlsView(detail).template],
    [new CommentsView(detail.comments).template]
  ).template,

  new FooterView([
    new FooterStatisticView(FILM_TOTAL_COUNT).template
  ]).template,
], document.body, true);

const catalogList = Array.from(document.querySelectorAll('[data-catalog]'));
catalogList.forEach((catalog) => {
  let renderedTaskCount = FILM_COUNT_PER_STEP;

  if (renderedTaskCount >= films.length) {
    const showMoreBtn = catalog.querySelector('[data-btn="show-more"]');
    showMoreBtn.remove();
  }

  catalog.addEventListener('click', (e) => {
    const { target } = e;

    const showMoreBtn = target.closest('[data-btn="show-more"]');
    if (!showMoreBtn) {
      return;
    }

    const filmsToRender = films.slice(renderedTaskCount, renderedTaskCount + FILM_COUNT_PER_STEP);
    const container = catalog.querySelector('[data-container="films"]');
    renderTemplate(filmsToRender.map((card) => new CardView(card).template), container, false, true);

    renderedTaskCount += FILM_COUNT_PER_STEP;

    if (renderedTaskCount >= films.length) {
      showMoreBtn.remove();
    }
  });
});
