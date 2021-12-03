export const detailTemplate = ({ topTemplates = [], bottomTemplates = [] }) => `
<section class="film-details" style="display: none;">
  <form class="film-details__inner" action="" method="get">
    <div class="film-details__top-container">
      <div class="film-details__close">
        <button class="film-details__close-btn" type="button">close</button>
      </div>

      ${topTemplates.join('')}
    </div>

    <div class="film-details__bottom-container">
      ${bottomTemplates.join('')}
    </div>
  </form>
</section>
`;
