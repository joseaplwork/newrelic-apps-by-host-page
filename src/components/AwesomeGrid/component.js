import { APP_CLICK_EVT_REF } from './constants';
import Placeholder from './Placeholder';

export const styles = `
  .AwesomeGridScope {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .AwesomeGridScope .awesomegrid-card {
    padding: 1.875rem;
    width: 375px;
    max-width: 100%;
    background-color: white;
    margin: 0.9375rem 0;
  }

  .AwesomeGridScope .awesomegrid-card:nth-child(even) {
    margin-left: 30px;
  }

  .AwesomeGridScope .awesomegrid-app {
    margin-bottom: 1.25rem;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: start;
    align-items: flex-start;
    cursor: pointer;
  }

  .AwesomeGridScope .awesomegrid-app:last-child {
    margin-bottom: 0;
  }

  .AwesomeGridScope .awesomegrid-placeholder-host,
  .AwesomeGridScope .awesomegrid-host {
    margin-bottom: 1.438rem;
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.2;
  }

  .AwesomeGridScope .awesomegrid-placeholder-host {
    background: #f1f1f1;
    height: 15px;
    max-width: 80%;
  }

  .AwesomeGridScope .awesomegrid-placeholder-app-apdex,
  .AwesomeGridScope .awesomegrid-app-apdex {
    color: #4a4a4a;
    font-size: 0.8125rem;
    line-height: 1.5;
    display: inline-block;
    margin-right: 1.25rem;
  }

  .AwesomeGridScope .awesomegrid-placeholder-app-apdex {
    background: #f1f1f1;
    height: 15px;
    width: 15px;
  }

  .AwesomeGridScope .awesomegrid-app-name {
    color: #4a4a4a;
    font-size: 1rem;
    line-height: 1.2;
    -ms-flex: 1;
    flex: 1;
  }

  .AwesomeGridScope .awesomegrid-placeholder-app-name1,
  .AwesomeGridScope .awesomegrid-placeholder-app-name2 {
    background: #f1f1f1;
    display: inline-block;
  }

  .AwesomeGridScope .awesomegrid-placeholder-app-name1 {
    height: 15px;
    width: 90%;
  }

  .AwesomeGridScope .awesomegrid-placeholder-app-name2 {
    height: 15px;
    width: 60%;
  }

  .AwesomeGridScope .awesomegrid-animate {
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeholder;
    animation-timing-function: linear;
    background: #f1f1f1;
    background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
    background-size: 800px 104px;
    position: relative;
  }

  @media screen and (max-width: 840px) {
    .AwesomeGridScope {
      -ms-flex-align: center;
      align-items: center;
      -ms-flex-direction: column;
      flex-direction: column;
    }

    .AwesomeGridScope .awesomegrid-card:nth-child(even) {
      margin-left: 0;
    }
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
      <div class="AwesomeGridScope">
        ${Placeholder} ${Placeholder} ${Placeholder} ${Placeholder}
      </div>
    `;
  }

  return `
    <div class="AwesomeGridScope">
      ${data.map((hostApplication, index) => `
        <div class="awesomegrid-card">
          <div class="awesomegrid-host">${hostApplication.host}</div>
          <div class="awesomegrid-apps">
            ${hostApplication.applications.map(app => `
              <div class="awesomegrid-app" data-evt="${APP_CLICK_EVT_REF}" data-index="${index}" data-key="${app.$$id}">
                <div class="awesomegrid-app-apdex">${app.apdex}</div>
                <div class="awesomegrid-app-name">${app.name}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
};
