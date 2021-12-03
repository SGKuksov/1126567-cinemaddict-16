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

renderTemplate([
  headerTemplate({
    templates: [userTemplate()]
  }),

  mainTemplate({
    templates: [
      navigationTemplate(),
      filterTemplate(),

      catalogTemplate({
        templates: [
          listTemplate({
            title: 'All movies. Upcoming',
            extraClass: '',
            hasShowMoreBtn: true,
            cards: [1, 2, 3]
          }),
          listTemplate({
            title: 'Top rated',
            extraClass: 'films-list--extra',
            cards: [1, 2]
          }),
          listTemplate({
            title: 'Most commented',
            extraClass: 'films-list--extra',
            cards: [1, 2]
          }),
        ]
      }),
    ]
  }),

  detailTemplate({
    topTemplates: [informationTemplate(), controlsTemplate()],
    bottomTemplates: [commentsTemplate({ comments: [1, 2, 3] })]
  }),

  footerTemplate({
    templates: [footerStatisticTemplate()]
  }),
], document.body, true);
