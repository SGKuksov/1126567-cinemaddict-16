const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend',
};

const createElement = (tag = 'div') => document.createElement(tag);

const createRootElement = (templates = [], container) => {
  const placeholder = createElement();

  container.prepend(placeholder);

  placeholder.insertAdjacentHTML(RenderPosition.BEFOREBEGIN, templates.join(''));

  placeholder.remove();
};

export const renderTemplate = (templates = [], container = createElement(), isRoot = false) => {
  if (isRoot) {
    createRootElement(templates, container);

    return;
  }

  container.innerHTML = templates.join('');
};
