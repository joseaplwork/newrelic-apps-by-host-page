import NewRelicHostApps from 'newrelic-host-applications';
import { getRequest } from './helpers/request';
import { setListData, jsonDataError } from './global-actions';
import { MAX_HOST_APPS_LIMIT, JSON_DATA_URL } from './global-constants';
import AwesomeGrid from './components/AwesomeGrid';
import AwesomeList from './components/AwesomeList';
import ToggleListStyle from './components/ToggleListStyle';


class AppsByHostSite {
  constructor() {
    this.store = {
      toggleListStyleState: ToggleListStyle.initState,
      awesomeGridState: AwesomeGrid.initState,
      awesomeListState: AwesomeList.initState,
    };
  }

  dispatch(action) {
    const {
      toggleListStyleState, awesomeGridState, awesomeListState,
    } = this.store;

    const newToggleListStyleState = ToggleListStyle.reducer(toggleListStyleState, action);
    const newAwesomeGridState = AwesomeGrid.reducer(awesomeGridState, action);
    const newAwesomeListState = AwesomeList.reducer(awesomeListState, action);

    this.store = Object.assign(
      {},
      { toggleListStyleState: newToggleListStyleState },
      { awesomeGridState: newAwesomeGridState },
      { awesomeListState: newAwesomeListState },
    );

    this.renderViews();
  }

  renderViews() {
    const {
      toggleListStyleState, awesomeGridState, awesomeListState,
    } = this.store;

    ToggleListStyle.render(toggleListStyleState, '#ToggleListStyleEntry');
    AwesomeGrid.render(awesomeGridState, '#AwesomeGridEntry');
    AwesomeList.render(awesomeListState, '#AwesomeListEntry');
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
