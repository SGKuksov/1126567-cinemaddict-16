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

renderTemplate([
  headerTemplate([userTemplate()]),

  mainTemplate([
    navigationTemplate(),
    filterTemplate(),
    catalogTemplate([
      listTemplate([1, 2, 3], {
        title: 'All movies. Upcoming',
        extraClass: '',
      }),
      listTemplate([1, 2, 3], {
        title: 'Top rated',
        extraClass: 'films-list--extra',
      }),
      listTemplate([1, 2, 3], {
        title: 'Most commented',
        extraClass: 'films-list--extra',
      }),
    ]),
  ]),

  footerTemplate([footerStatisticTemplate()]),
], document.body, true);
