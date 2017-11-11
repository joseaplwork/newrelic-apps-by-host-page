import render from 'helpers/render';
import { template, styles } from './component';
import actions from './actions';
import reducer, { initState } from './reducer';
import { COMPONENT_NAME } from './constants';

export default {
  render: (state, selector) => render({
    name: COMPONENT_NAME,
    template: template(state),
    selector,
    styles,
  }),
  actions,
  reducer,
  initState,
};
