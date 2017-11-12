import { actionTypes as at } from './constants';

export function onCloseModal() {
  return {
    type: at.ON_CLOSE_MODAL,
  };
}

export default {
  onCloseModal,
};
