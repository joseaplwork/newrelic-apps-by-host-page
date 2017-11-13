import AppsByHostSite from 'AppsByHostSite';
import CloseIcon from 'components/Icons/Close';

import { MODAL_CROSS_CLICK_EVT_REFERENCE } from './constants';
import { onCloseModal } from './actions';

export const styles = `
  .AppDialogInfoOpened + div {
    filter: url(#blur);
  }

  .AppDialogInfoScope {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 100;
    top: 0;
    left: 0;
  }

  .AppDialogInfoScope .dialog-wrapper {
    max-width: 300px;
    width: auto;
    position: relative;
    top: 50%;
    left: 50%;
    background: white;
    padding: 1rem;
    color: #4a4a4a;
    font-size: 2rem;
    transform: translate3d(-50%, -50%, 0);
    text-align: center;
    animation-duration: 250ms;
    animation-name: zoomInCentered;
    animation-timing-function: cubic-bezier(.01,.01,.48,1.27);
  }

  .AppDialogInfoScope svg {
    width: 25px;
    height: 25px;
    cursor: pointer;
    position: absolute;
    top: 5px;
    right: 5px;
  }
`;

function _onCloseModal() {
  AppsByHostSite.dispatch(onCloseModal());
}

export const listeners = [{
  target: MODAL_CROSS_CLICK_EVT_REFERENCE,
  type: 'click',
  callback: _onCloseModal,
}];

export const template = (state, selector) => {
  const entry = document.querySelector(selector);
  const { show, app } = state;

  if (!show) {
    entry.classList.remove('AppDialogInfoOpened');
    return null;
  }

  entry.classList.add('AppDialogInfoOpened');

  return `
    <div class="AppDialogInfoScope">
      <div class="dialog-wrapper">
        version: ${app.version}
        <div data-evt="${MODAL_CROSS_CLICK_EVT_REFERENCE}">${CloseIcon}</div>
      </div>
    </div>
  `;
};
