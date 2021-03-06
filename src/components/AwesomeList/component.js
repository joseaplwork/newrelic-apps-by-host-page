import Placeholder from './Placeholder';
import { APP_CLICK_EVT_REF } from './constants';

export const styles = `
  .AwesomeListScope {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: column;
    flex-flow: column;
  }

  .AwesomeListScope .awesomelist-card,
  .AwesomeListScope .awesomelist-placeholder-card {
    padding: 1.875rem;
    background-color: white;
    margin: 0.9375rem 0;
  }

  .AwesomeListScope .awesomelist-placeholder-card {
    min-width: 375px;
  }

  .AwesomeListScope .awesomelist-app,
  .AwesomeListScope .awesomelist-placeholder-app {
    cursor: pointer;
    margin-bottom: 20px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: start;
    align-items: flex-start;
  }

  .AwesomeListScope .awesomelist-app:last-child,
  .AwesomeListScope .awesomelist-placeholder-app:last-child {
    margin-bottom: 0;
  }

  .AwesomeListScope .awesomelist-host,
  .AwesomeListScope .awesomelist-placeholder-host {
    margin-bottom: 1.438rem;
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.2;
  }

  .AwesomeListScope .awesomelist-placeholder-host {
    height: 15px;
    background: #f1f1f1;
    max-width: 50%;
  }

  .AwesomeListScope .awesomelist-app-apdex,
  .AwesomeListScope .awesomelist-placeholder-app-apdex {
    display: inline-block;
    margin-right: 20px;
    color: #4a4a4a;
    font-size: 0.8125rem;
    line-height: 1.5;
  }

  .AwesomeListScope .awesomelist-placeholder-app-apdex {
    height: 15px;
    width: 15px;
    background: #f1f1f1;
  }

  .AwesomeListScope .awesomelist-app-name,
  .AwesomeListScope .awesomelist-placeholder-app-name {
    display: inline-block;
    color: #4a4a4a;
    font-size: 1rem;
    line-height: 1.2;
  }

  .AwesomeListScope .awesomelist-placeholder-app-name {
    height: 15px;
    background: #f1f1f1;
    width: 60%;
  }

  .AwesomeListScope .awesomelist-animate {
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeholder;
    animation-timing-function: linear;
    background: #f1f1f1;
    background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
    background-size: 1000px 104px;
    position: relative;
  }
`;

export const listeners = (state, props) => [{
  target: APP_CLICK_EVT_REF,
  type: 'click',
  callback: props._onClickApplication,
  state,
}];

export const template = (state) => {
  const {
    wasFetched, data,
  } = state;

  if (!wasFetched) {
    return `
      <div class="AwesomeListScope">
        ${Placeholder} ${Placeholder} ${Placeholder} ${Placeholder}
      </div>
    `;
  }

  return `
    <div class="AwesomeListScope">
      ${data.map((hostApplication, index) => `
        <div class="awesomelist-card">
          <div class="awesomelist-host">${hostApplication.host}</div>
          <div class="awesomelist-apps">
            ${hostApplication.applications.map(app => `
              <div class="awesomelist-app" data-evt="${APP_CLICK_EVT_REF}" data-index="${index}" data-key="${app.$$id}">
                <div class="awesomelist-app-apdex">${app.apdex}</div>
                <div class="awesomelist-app-name">${app.name}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
};
