import render from 'helpers/render';

import { template, listeners, styles } from './component';
import { COMPONENT_NAME } from './constants';

export default {
  render: (state, selector) => render({
    name: COMPONENT_NAME,
    template: template(state),
    selector,
    styles,
  }),
  getListeners: (state, props) => listeners(state, props),
};
