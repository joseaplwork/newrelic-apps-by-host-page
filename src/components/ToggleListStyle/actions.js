import { actionTypes as at } from './constants';

export function toggleStyle(isSelected) {
  return {
    type: at.TOGGLE_STYLE,
    payload: { isSelected },
  };
}

export default {
  toggleStyle,
};
