import render from 'helpers/render';

import { template, styles } from './component';
import { COMPONENT_NAME } from './constants';

export default {
  render: (state, selector) => render({
    name: COMPONENT_NAME,
    template: template(state),
    selector,
    styles,
  }),
};
