import { commentTemplate } from './comment-template';
import { emojiItemTemplate } from './emoji-item-template';

const EMOJI_LIST = [
  { id: 'emoji-smile', name: 'smile' },
  { id: 'emoji-sleeping', name: 'sleeping' },
  { id: 'emoji-puke', name: 'puke' },
  { id: 'emoji-angry', name: 'angry' },
];

export const commentsTemplate = ({ comments = [] }) => `
<section class="film-details__comments-wrap">
  <h3 class="film-details__comments-title">
    Comments <span class="film-details__comments-count">${comments.length}</span>
  </h3>

  <ul class="film-details__comments-list">
    ${comments.map((comment) => commentTemplate(comment)).join('')}
  </ul>

  <div class="film-details__new-comment">
    <div class="film-details__add-emoji-label"></div>

    <label class="film-details__comment-label">
      <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
    </label>

    <div class="film-details__emoji-list">
      ${EMOJI_LIST.map((item) => emojiItemTemplate(item)).join('')}
    </div>
  </div>
</section>
`;
