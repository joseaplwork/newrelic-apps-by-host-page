import { actionTypes as appsListAt } from 'components/AppsList/constants';
import { actionTypes as at } from './constants';

export const initState = {
  show: false,
  app: null,
};

export default function (state = initState, action) {
  const { type, payload } = action;

  switch (type) {
    case appsListAt.ON_CLICK_APPLICATION: {
      const { application } = payload;

      return Object.assign({}, state, {
        show: true,
        app: application,
      });
    }
    case at.ON_CLOSE_MODAL: {
      return Object.assign({}, state, {
        show: false,
        app: null,
      });
    }
    default:
      return state;
  }
}
