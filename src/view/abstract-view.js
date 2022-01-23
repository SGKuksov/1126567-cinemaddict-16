import { html, render } from 'lit-html';

const test = html`<div>Hello my friends</div>`;
const test1 = html`<div>Hello my friends</div>`;

// const root1 = render([test1, test1, test1], document.body);
// const root = render(test, document.body);
// console.log(root.startNode.nextSibling);

export default class AbstractView {
  #element = null;
  _callback = {};

  constructor() {
    if (new.target === AbstractView) {
      throw new Error('Can\'t instantiate AbstractView, only concrete one.');
    }
  }

  get element() {
    if (!this.#element) {
      // this.#element = createElement(this.template);
    }

    return this.#element;
  }

  get template() {
    throw new Error('Abstract method not implemented: get template');
  }

  removeElement() {
    this.#element = null;
  }
}
