export function request(method, url) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();

    function onLoad() {
      if (this.status >= 200 && this.status < 300) {
        resolve(this.response);
      } else {
        reject(new Error(this.responseText));
      }
    }

    function onError() {
      reject(new Error(this.statusText));
    }

    req.onload = onLoad;
    req.onerror = onError;
    req.open(method, url);
    req.send();
  });
}

export function getRequest(url) {
  return request('GET', url);
}

export default request;
