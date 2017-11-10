import Placeholder from './Placeholder';

export const styles = `
  #AwesomeGrid {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .awesomegrid-card {
    padding: 1.875rem;
    max-width: 375px;
    width: 100%;
    background-color: white;
    margin: 0.9375rem 0;
  }

  .awesomegrid-card:nth-child(even) {
    margin-left: 30px;
  }

  .awesomegrid-app {
    margin-bottom: 1.25rem;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: start;
    align-items: flex-start;
  }

  .awesomegrid-app:last-child {
    margin-bottom: 0;
  }

  .awesomegrid-placeholder-host,
  .awesomegrid-host {
    margin-bottom: 1.438rem;
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.2;
  }

  .awesomegrid-placeholder-host {
    background: #f1f1f1;
    height: 15px;
    max-width: 80%;
  }

  .awesomegrid-placeholder-app-apdex,
  .awesomegrid-app-apdex {
    color: #4a4a4a;
    font-size: 0.8125rem;
    line-height: 1.5;
    display: inline-block;
    margin-right: 1.25rem;
  }

  .awesomegrid-placeholder-app-apdex {
    background: #f1f1f1;
    height: 15px;
    width: 15px;
  }

  .awesomegrid-app-name {
    color: #4a4a4a;
    font-size: 1rem;
    line-height: 1.2;
    -ms-flex: 1;
    flex: 1;
  }

  .awesomegrid-placeholder-app-name1,
  .awesomegrid-placeholder-app-name2 {
    background: #f1f1f1;
    display: inline-block;
  }

  .awesomegrid-placeholder-app-name1 {
    height: 15px;
    width: 90%;
  }

  .awesomegrid-placeholder-app-name2 {
    height: 15px;
    width: 60%;
  }

  @media screen and (max-width: 840px) {
    #AwesomeGrid {
      -ms-flex-align: center;
      align-items: center;
      -ms-flex-direction: column;
      flex-direction: column;
    }

    .awesomegrid-card:nth-child(even) {
      margin-left: 0;
    }
  }

  .awesomegrid-animate {
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
`;

export const template = ({ show, wasFetched, data }) => {
  if (!show) return null;

  if (!wasFetched) return Placeholder;

  return `
    <div id="AwesomeGrid">
      ${data.map(hostApplication => `
        <div class="awesomegrid-card">
          <div class="awesomegrid-host">${hostApplication.host}</div>
          <div class="awesomegrid-apps">
            ${hostApplication.applications.map(app => `
              <div class="awesomegrid-app">
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
