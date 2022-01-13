import { cardTemplate } from './card-template';
import { showMoreBtnTemplate } from './show-more-btn-template';

export const listTemplate = ({ title, extraClass, hasShowMoreBtn, cards = [] }) => `
<section class="films-list ${extraClass}">
  <h2 class="films-list__title visually-hidden">${title}</h2>

  <div class="films-list__container">
    ${cards.map((card) => cardTemplate(card)).join('')}
  </div>

  ${hasShowMoreBtn ? showMoreBtnTemplate() : ''}
</section>
`;
