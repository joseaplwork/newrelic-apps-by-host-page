import { actionTypes as at } from './constants';

export function onClickApplication(application) {
  return {
    type: at.ON_CLICK_APPLICATION,
    payload: { application },
  };
}

export default {
  onClickApplication,
};
