const baseUrl = 'https://webhook.site/';
const TIMEOUT = 300000;

const timeoutPromise = (promise, timeout, error) => {
    return new Promise((resolve, reject) => {
      const clearTimeOut = setTimeout(() => {
        reject(error);
      }, timeout);
      promise.then((data) => {
        clearTimeout(clearTimeOut);
        resolve(data);
      }, (data) => {
        clearTimeout(clearTimeOut);
        reject(data);
      });
    });
}

export const doPost = (url, body, urlPrefix = baseUrl) => timeoutPromise(fetch(
    urlPrefix.concat(url),
    Object.assign({}, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(body),
    }),
  ), TIMEOUT, 504)
    .then((res) => {
      let response = null;
      response = res.json();
      if (res.ok) {
        return response;
      }
      return response.then((error) => { throw error; });
    }
);