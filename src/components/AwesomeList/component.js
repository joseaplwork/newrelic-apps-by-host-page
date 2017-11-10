import Placeholder from './Placeholder';

export const styles = `
  #AwesomeList {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: column;
    flex-flow: column;
  }

  .awesomelist-card,
  .awesomelist-placeholder-card {
    padding: 1.875rem;
    background-color: white;
    margin: 0.9375rem 0;
  }

  .awesomelist-placeholder-card {
    min-width: 375px;
  }

  .awesomelist-app,
  .awesomelist-placeholder-app {
    margin-bottom: 20px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: start;
    align-items: flex-start;
  }

  .awesomelist-app:last-child,
  .awesomelist-placeholder-app:last-child {
    margin-bottom: 0;
  }

  .awesomelist-host,
  .awesomelist-placeholder-host {
    margin-bottom: 1.438rem;
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.2;
  }

  .awesomelist-placeholder-host {
    height: 15px;
    background: #f1f1f1;
    max-width: 50%;
  }

  .awesomelist-app-apdex,
  .awesomelist-placeholder-app-apdex {
    display: inline-block;
    margin-right: 20px;
    color: #4a4a4a;
    font-size: 0.8125rem;
    line-height: 1.5;
  }

  .awesomelist-placeholder-app-apdex {
    height: 15px;
    width: 15px;
    background: #f1f1f1;
  }

  .awesomelist-app-name,
  .awesomelist-placeholder-app-name {
    display: inline-block;
    color: #4a4a4a;
    font-size: 1rem;
    line-height: 1.2;
  }

  .awesomelist-placeholder-app-name {
    height: 15px;
    background: #f1f1f1;
    width: 60%;
  }

  .awesomelist-animate {
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

export const template = ({ show, wasFetched, data }) => {
  if (!show) return null;

  if (!wasFetched) return Placeholder;

  return `
    <div id="AwesomeList">
      ${data.map(hostApplication => `
        <div class="awesomelist-card">
          <div class="awesomelist-host">${hostApplication.host}</div>
          <div class="awesomelist-apps">
            ${hostApplication.applications.map(app => `
              <div class="awesomelist-app">
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
