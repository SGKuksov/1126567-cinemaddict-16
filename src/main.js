import { renderTemplate } from './utils/render';
import { headerTemplate } from './view/header-template';
import { mainTemplate } from './view/main-template';
import { footerTemplate } from './view/footer-template';
import { userTemplate } from './view/user-template';
import { footerStatisticTemplate } from './view/footer-statistic-template';
import { navigationTemplate } from './view/navigation-template';
import { filterTemplate } from './view/filter-template';
import { catalogTemplate } from './view/catalog-template';
import { listTemplate } from './view/list-template';
import { detailTemplate } from './view/detail-template';
import { informationTemplate } from './view/information-template';
import { controlsTemplate } from './view/controls-template';
import { commentsTemplate } from './view/comments-template';
import { cardTemplate } from './view/card-template';
import {
  generateFilm,
  generateCounters,
  generateUser,
  generateDetail,
  getRandomInteger
} from './mock';

const FILM_COUNT = 20;
const FILM_COUNT_PER_STEP = 5;
const FILM_EXTRA_COUNT_PER_STEP = 2;
const FILM_TOTAL_COUNT = getRandomInteger(100, 55555);

const films = Array.from({ length: FILM_COUNT }, generateFilm);
const counters = generateCounters();
const user = generateUser();
const detail = generateDetail();

renderTemplate([
  headerTemplate({
    templates: [userTemplate(user)]
  }),

  mainTemplate({
    templates: [
      navigationTemplate(counters),
      filterTemplate(),

      catalogTemplate({
        templates: [
          listTemplate({
            title: 'All movies. Upcoming',
            extraClass: '',
            hasShowMoreBtn: true,
            cards: films.slice(0, FILM_COUNT_PER_STEP)
          }),
          listTemplate({
            title: 'Top rated',
            extraClass: 'films-list--extra',
            cards: films.slice(0, FILM_EXTRA_COUNT_PER_STEP)
          }),
          listTemplate({
            title: 'Most commented',
            extraClass: 'films-list--extra',
            cards: films.slice(0, FILM_EXTRA_COUNT_PER_STEP)
          }),
        ]
      }),
    ]
  }),

  detailTemplate({
    topTemplates: [informationTemplate(detail), controlsTemplate(detail)],
    bottomTemplates: [commentsTemplate({ comments: detail.comments })]
  }),

  footerTemplate({
    templates: [footerStatisticTemplate(FILM_TOTAL_COUNT)]
  }),
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
    renderTemplate(filmsToRender.map((card) => cardTemplate(card)), container, false, true);

    renderedTaskCount += FILM_COUNT_PER_STEP;

    if (renderedTaskCount >= films.length) {
      showMoreBtn.remove();
    }
  });
});
