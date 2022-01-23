// NOTE[@sgkuksov] Правила показа рейтинга
// 0 — блок со званием не отображается;
// от 1 до 10 — novice;
// от 11 до 20 — fan;
// от 21 и выше — movie buff.

import AbstractView from './abstract-view';

const ratingTemplate = (rating) => {
  if (!rating) {
    return '';
  }

  return `<p class="profile__rating">${rating}</p>`;
};

// NOTE[@sgkuksov] Пример вывода аватара
// images/bitmap@2x.png

const userTemplate = (user) => `
<section class="header__profile profile">
  ${ratingTemplate(user.rating)}

  <img class="profile__avatar" src="${user.avatar}" alt="Avatar" width="35" height="35">
</section>
`;

export default class UserView extends AbstractView {
  #user = null;

  constructor(user) {
    super();

    this.#user = user;
  }

  get template() {
    if (!this.#user) {
      return '';
    }

    return userTemplate(this.#user);
  }
}
