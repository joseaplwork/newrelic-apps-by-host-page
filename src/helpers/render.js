export function _shouldRenderStyles(id, textStyles) {
  const style = document.querySelector(`style[data-ref="${id}"]`);

  if (!style) {
    const styleNode = document.createElement('style');

    styleNode.setAttribute('data-ref', id);
    styleNode.appendChild(document.createTextNode(textStyles));

    document.head.appendChild(styleNode);
  }
}

export function _updateListeners(listeners) {
  /* LISTENERS */
  if (listeners) {
    listeners.forEach((listener) => {
      const {
        target, type, callback, state,
      } = listener;
      const elements = document.querySelectorAll(`[data-evt="${target}"]`);

      [].forEach.call(elements, (element) => {
        element.removeEventListener(type, callback);
        const finalCallback = state ? event => callback(event, state) : callback;
        element.addEventListener(type, finalCallback);
      });
    });
  }
}

export function renderView(component) {
  const {
    name, styles, selector, template, listeners,
  } = component;

  /* TEMPLATE */
  const node = document.querySelector(selector);

  node.innerHTML = template || '';

  /* STYLES */
  _shouldRenderStyles(name, styles);

  /* LISTENERS */
  _updateListeners(listeners);

  return node;
}

export function returnView(component) {
  const {
    name, styles, template,
  } = component;

  /* STYLES */
  _shouldRenderStyles(name, styles);

  return template;
}

export default function render(component) {
  const { selector } = component;

  return selector ? renderView(component) : returnView(component);
}
