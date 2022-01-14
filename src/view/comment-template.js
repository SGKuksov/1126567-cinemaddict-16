import dayjs from 'dayjs';

const EMOJIES = {
  smile: {src: './images/emoji/smile.png', alt: 'emoji-smile'},
  sleeping: {src: './images/emoji/sleeping.png', alt: 'emoji-sleeping'},
  puke: {src: './images/emoji/puke.png', alt: 'emoji-puke'},
  angry: {src: './images/emoji/angry.png', alt: 'emoji-angry'},
};

export const commentTemplate = (comment) => `
<li class="film-details__comment">
  <span class="film-details__comment-emoji">
    <img src="${EMOJIES[comment.emoji].src}" width="55" height="55" alt="${EMOJIES[comment.emoji].alt}">
  </span>

  <div>
    <p class="film-details__comment-text">${comment.text}</p>

    <p class="film-details__comment-info">
      <span class="film-details__comment-author">${comment.author}</span>
      ${comment.date ? `<span class="film-details__comment-day">${dayjs(comment.date).format('YYYY/MM/DD HH:mm')}</span>` : ''}
      <button class="film-details__comment-delete">Delete</button>
    </p>
  </div>
</li>
`;
