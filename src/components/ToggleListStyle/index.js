import { template, listeners, styles } from './component';
import actions from './actions';
import reducer, { initState } from './reducer';
import { COMPONENT_NAME } from './constants';

export default {
  component: (state, scope) => ({
    name: COMPONENT_NAME,
    selector: '#ToggleListStyle',
    template: template(state),
    listeners: listeners(scope),
    styles,
  }),
  actions,
  reducer,
  initState,
};
