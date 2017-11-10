export function render(component) {
  const {
    name, styles, selector, template, listeners,
  } = component;

  /* TEMPLATE */
  const node = document.querySelector(selector);

  if (template) {
    node.innerHTML = template;
  }

  /* STYLES */
  const style = document.querySelector(`style[data-ref="${name}"]`);

  if (!style) {
    const styleNode = document.createElement('style');

    styleNode.setAttribute('data-ref', name);
    styleNode.appendChild(document.createTextNode(styles));

    document.head.appendChild(styleNode);
  }

  /* LISTENERS */
  if (listeners) {
    listeners.forEach(({ target, type, callback }) => {
      const element = document.querySelector(`[data-evt="${target}"]`);
      element.addEventListener(type, callback);
    });
  }

  return node;
}

export function updateView(component) {
  const {
    selector, template, listeners,
  } = component;

  /* REMOVE PREVIOUS LISTENERS */
  if (listeners) {
    listeners.forEach(({ target, type, callback }) => {
      const element = document.querySelector(`[data-evt="${target}"]`);
      element.removeEventListener(type, callback);
    });
  }

  /* TEMPLATE */
  const node = document.querySelector(selector);

  if (template) {
    node.innerHTML = template;
  }

  /* ADD NEW LISTENERS */
  if (listeners) {
    listeners.forEach(({ target, type, callback }) => {
      const element = document.querySelector(`[data-evt="${target}"]`);
      element.addEventListener(type, callback);
    });
  }

  return node;
}
