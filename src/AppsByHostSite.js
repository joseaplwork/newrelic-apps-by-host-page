import NewRelicHostApps from 'newrelic-host-applications';
import { getRequest } from 'helpers/request';
import { setListData, jsonDataError } from 'global-actions';
import { MAX_HOST_APPS_LIMIT, JSON_DATA_URL } from 'global-constants';
import AppsList from 'components/AppsList';
import AppDialogInfo from 'components/AppDialogInfo';
import ToggleListStyle from 'components/ToggleListStyle';


class AppsByHostSite {
  constructor() {
    this.store = {
      toggleListStyleState: ToggleListStyle.initState,
      appsListState: AppsList.initState,
      appDialogInfoState: AppDialogInfo.initState,
    };
  }

  dispatch(action) {
    const {
      toggleListStyleState, appsListState, appDialogInfoState,
    } = this.store;

    const newToggleListStyleState = ToggleListStyle.reducer(toggleListStyleState, action);
    const newAppsListState = AppsList.reducer(appsListState, action);
    const newAppDialogInfoState = AppDialogInfo.reducer(appDialogInfoState, action);

    this.store = Object.assign(
      {},
      { toggleListStyleState: newToggleListStyleState },
      { appsListState: newAppsListState },
      { appDialogInfoState: newAppDialogInfoState },
    );

    this.renderViews();
  }

  renderViews() {
    const {
      toggleListStyleState, appsListState, appDialogInfoState,

    } = this.store;

    ToggleListStyle.render(toggleListStyleState, '#ToggleListStyleEntry');
    AppsList.render(appsListState, '#AppsListEntry');
    AppDialogInfo.render(appDialogInfoState, '#AppDialogInfoEntry');
  }

  init() {
    this.renderViews();
    const request = getRequest(JSON_DATA_URL);

    request
      .then((data) => {
        const parsedData = JSON.parse(data);
        const lib = new NewRelicHostApps(parsedData);
        const listData = lib.hostsList.map(host => ({
          host,
          applications: lib.getTopAppsByHost(host, MAX_HOST_APPS_LIMIT),
        }));
        this.dispatch(setListData(listData));
      })
      .catch(error => this.dispatch(jsonDataError(error)));
  }
}

export default new AppsByHostSite();
