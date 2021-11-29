export const emojiItemTemplate = ({ id, name }) => `
<input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="${id}" value="${name}">
<label class="film-details__emoji-label" for="${id}">
  <img src="./images/emoji/${name}.png" width="30" height="30" alt="emoji">
</label>
`;
