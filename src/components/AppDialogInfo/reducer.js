import { actionTypes as awesomeGridAt } from 'components/AwesomeGrid/constants';
import { actionTypes as awesomeListAt } from 'components/AwesomeList/constants';
import { actionTypes as at } from './constants';

export const initState = {
  show: false,
  app: null,
};

export default function (state = initState, action) {
  const { type, payload } = action;

  switch (type) {
    case awesomeListAt.ON_CLICK_APPLICATION:
    case awesomeGridAt.ON_CLICK_APPLICATION: {
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
