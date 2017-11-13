import { globalActionTypes as gat } from 'global-constants';
import { actionTypes as tlsActionTypes } from 'components/ToggleListStyle/constants';

export const initState = {
  showAsList: false,
  wasFetched: false,
  data: [],
  isEmpty: false,
  error: null,
};

export default function (state = initState, action) {
  const { type, payload, error } = action;

  switch (type) {
    case gat.SET_LIST_DATA: {
      const { data = [] } = payload;

      return Object.assign({}, state, {
        wasFetched: true,
        isEmpty: !data.length,
        data,
        error: null,
      });
    }
    case gat.GET_JSON_DATA_ERROR:
      return Object.assign({}, state, {
        wasFetched: true,
        data: [],
        error: !!error,
      });
    case tlsActionTypes.TOGGLE_STYLE:
      return Object.assign({}, state, {
        showAsList: payload.isSelected,
      });
    default:
      return state;
  }
}
