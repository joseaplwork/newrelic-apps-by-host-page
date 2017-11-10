import { globalActionTypes as gat } from '../../global-constants';
import { actionTypes as tlsActionTypes } from '../../components/ToggleListStyle/constants';

export const initState = {
  show: true,
  wasFetched: false,
  data: [],
  error: null,
};

export default function (state = initState, action) {
  const { type, payload, error } = action;

  switch (type) {
    case gat.GET_JSON_DATA_REQUEST:
      return Object.assign({}, state, {
        wasFetched: false,
      });
    case gat.SET_LIST_DATA:
      return Object.assign({}, state, {
        wasFetched: true,
        data: payload.data,
        error: null,
      });
    case gat.GET_JSON_DATA_ERROR:
      return Object.assign({}, state, {
        wasFetched: true,
        data: [],
        error,
      });
    case tlsActionTypes.TOGGLE_STYLE:
      return Object.assign({}, state, {
        show: !payload.isSelected,
      });
    default:
      return state;
  }
}
