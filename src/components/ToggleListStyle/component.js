import AppsByHostSite from 'AppsByHostSite';

import { INPUT_EVT_REF } from './constants';
import { toggleStyle } from './actions';

export const styles = `
  .ToggleListStyleScope .inputToggleList {
    width: 16px;
    height: 16px;
    display: inline-block;
    box-shadow: inset 0 0 0px 2px #e0e0e0;
    position: relative;
    border-radius: 3px;
    margin: 0;
    vertical-align: top;
    background: white;
    cursor: pointer;
  }

  .ToggleListStyleScope .inputToggleList input {
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    opacity: 0;
    outline: none;
    z-index: 10;
    cursor: pointer;
  }

  .ToggleListStyleScope label {
    cursor: pointer;
  }

  .ToggleListStyleScope .inputToggleList i {
    position: absolute;
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    top: 2px;
    left: 2px;
    margin: 2px;
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

export const listeners = [{
  target: INPUT_EVT_REF,
  type: 'change',
  callback: onChange,
}];

export const template = ({ showAsList }) => `
  <div class="ToggleListStyleScope">
    <p class="inputToggleList">
      <input id="inputToggleListRef" ${(showAsList && 'checked') || ''} data-evt="${INPUT_EVT_REF}" type="checkbox">
      <i></i>
    </p>
    <label for="inputToggleListRef">${showAsList ? 'Show as an awesome grid' : 'Show as list'}</label>
  </div>
`;
