import { globalActionTypes as gat } from './global-constants';

export function setListData(data) {
  return {
    type: gat.SET_LIST_DATA,
    payload: { data },
  };
}

export function jsonDataError(error) {
  return {
    type: gat.GET_JSON_DATA_ERROR,
    error,
  };
}
