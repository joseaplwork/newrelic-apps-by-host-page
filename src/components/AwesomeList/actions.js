import { actionTypes as at } from './constants';

export function onClickApplication() {
  return {
    type: at.ON_CLICK_APPLICATION,
  };
}

export default {
  onClickApplication,
};
