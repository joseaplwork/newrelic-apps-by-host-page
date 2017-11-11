import { INPUT_EVT_REFERENCE } from './constants';
import AppsByHostSite from '../../AppsByHostSite';
import { toggleStyle } from './actions';

export const styles = `
  .ToggleListStyleScope .inputToggleList {
    width: 16px;
    height: 16px;
    display: inline-block;
    border: 2px solid #e0e0e0;
    position: relative;
    border-radius: 3px;
    margin: 0;
    vertical-align: top;
    background: white;
  }

  .ToggleListStyleScope .inputToggleList input {
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    opacity: 0;
    outline: none;
  }

  .ToggleListStyleScope .inputToggleList i {
    position: absolute;
    width: 8px;
    height: 8px;
    top: 2px;
    left: 2px;
    margin: 0;
    opacity: 0;
    border-radius: 2px;
    background: #4caf50;
  }

  .ToggleListStyleScope .inputToggleList input:checked + i {
    opacity: 1;
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
  <div class="ToggleListStyleScope">
    <p class="inputToggleList">
      <input id="inputToggleListRef" ${(showAsList && 'checked') || ''} data-evt="${INPUT_EVT_REFERENCE}" type="checkbox">
      <i></i>
    </p>
    <label for="inputToggleListRef">${showAsList ? 'Show as an awesome grid' : 'Show as list'}</label>
  </div>
`;
