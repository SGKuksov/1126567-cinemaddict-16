import AbstractView from './abstract-view';

const footerTemplate = (templates = []) => `
<footer class="footer">
  <section class="footer__logo logo logo--smaller">Cinemaddict</section>

  <section class="footer__statistics">
    ${templates.join('')}
  </section>
</footer>
`;

export default class FooterView extends AbstractView {
  #templates = [];

  constructor(templates) {
    super();
    this.#templates = templates;
  }

  get template() {
    return footerTemplate(this.#templates);
  }
}
