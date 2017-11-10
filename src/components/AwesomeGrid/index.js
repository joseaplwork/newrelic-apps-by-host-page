import { template, styles } from './component';
import actions from './actions';
import reducer, { initState } from './reducer';
import { COMPONENT_NAME } from './constants';

export default {
  component: state => ({
    name: COMPONENT_NAME,
    selector: '#appsList',
    template: template(state),
    styles,
  }),
  actions,
  reducer,
  initState,
};
