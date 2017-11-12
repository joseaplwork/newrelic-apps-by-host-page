import { actionTypes as at } from 'components/ToggleListStyle/constants';

export const initState = {
  showAsList: false,
};

export default function (state = initState, action) {
  const { type, payload } = action;

  switch (type) {
    case at.TOGGLE_STYLE: {
      const newState = Object.assign({}, state, {
        showAsList: payload.isSelected,
      });

      return newState;
    }
    default:
      return state;
  }
}
