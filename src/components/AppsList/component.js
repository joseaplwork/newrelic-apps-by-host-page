import AppsByHostSite from 'AppsByHostSite';
import EmptyView from 'components/EmptyView';
import KiteIcon from 'components/Icons/Kite';
import ErrorSignalIcon from 'components/Icons/ErrorSignal';
import AwesomeGrid from 'components/AwesomeGrid';
import AwesomeList from 'components/AwesomeList';

import { onClickApplication } from './actions';

function _onClickApplication(evt, state) {
  const target = evt.currentTarget;
  const key = target.getAttribute('data-key');
  const index = target.getAttribute('data-index');
  const clickedApp = state.data[index].applications.find(app => app.$$id === parseInt(key, 10));

  AppsByHostSite.dispatch(onClickApplication(clickedApp));
}

export const listeners = state => [
  ...AwesomeGrid.getListeners(state, { _onClickApplication }),
  ...AwesomeList.getListeners(state, { _onClickApplication }),
];

export const template = (state) => {
  const {
    showAsList, wasFetched, data, isEmpty, error,
  } = state;

  if (error) {
    return EmptyView.render({
      icon: ErrorSignalIcon,
      message: 'Oh snap... Something went terribly wrong 😩',
    });
  }

  if (isEmpty) {
    return EmptyView.render({
      icon: KiteIcon,
      message: 'Woops... There is not data to show 😕',
    });
  }

  if (showAsList) {
    return AwesomeList.render({
      wasFetched,
      data,
    });
  }

  return AwesomeGrid.render({
    wasFetched,
    data,
  });
};
