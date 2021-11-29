import { cardTemplate } from './card-template';
import { showMoreBtnTemplate } from './show-more-btn-template';

export const listTemplate = (cards = [], { title, extraClass }) => `
<section class="films-list ${extraClass}">
  <h2 class="films-list__title visually-hidden">${title}</h2>

  <div class="films-list__container">
    ${cards.map(() => cardTemplate())}
  </div>

  ${showMoreBtnTemplate()}
</section>
`;
