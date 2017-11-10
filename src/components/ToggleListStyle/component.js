import { INPUT_EVT_REFERENCE } from './constants';
import AppsByHostSite from '../../AppsByHostSite';
import { toggleStyle } from './actions';

export const styles = `
  input {
    margin: 0;
  }
`;

function onChange(evt) {
  const element = evt.currentTarget;

  AppsByHostSite.dispatch(toggleStyle(element.checked));
}

export const listeners = () => [{
  target: INPUT_EVT_REFERENCE,
  type: 'change',
  callback: onChange,
}];

export const template = ({ showAsList }) => `
  <input id="inputToggleList" ${showAsList && 'checked'} data-evt="${INPUT_EVT_REFERENCE}" type="checkbox">
  <label for="inputToggleList">${showAsList ? 'Show as an awesome grid' : 'Show as list'}</label>
`;
