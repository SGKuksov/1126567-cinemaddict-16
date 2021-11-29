import { informationTemplate } from './information-template';
import { controlsTemplate } from './controls-template';
import { commentsTemplate } from './comments-template';

export const detailTemplate = (
  topContainerTemplates = [
    informationTemplate(),
    controlsTemplate()
  ],
  bottomContainerTemplates = [
    commentsTemplate()
  ]
) => `
<section class="film-details">
  <form class="film-details__inner" action="" method="get">
    <div class="film-details__top-container">
      <div class="film-details__close">
        <button class="film-details__close-btn" type="button">close</button>
      </div>

      ${topContainerTemplates.join('')}
    </div>

    <div class="film-details__bottom-container">
      ${bottomContainerTemplates.join('')}
    </div>
  </form>
</section>
`;
