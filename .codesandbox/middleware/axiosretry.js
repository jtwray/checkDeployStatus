const axiosInstance = require("axios");
const axiosWithRetry = (axios) => {
  axios.interceptors.response.use(undefined, (err) => {
    const { config, message } = err;
    if (!config || !config.retry) {
      return Promise.reject(err);
    }
    // retry while Network timeout or Network Error
    if (!(message.includes("timeout") || message.includes("Network Error"))) {
      return Promise.reject(err);
    }
    config.retry -= 1;
    const delayRetryRequest = new Promise((resolve) => {
      setTimeout(() => {
        console.log("retry the request", config.url);
        resolve();
      }, config.retryDelay || 1000);
    });
    return delayRetryRequest.then(() => axios(config));
  });
};

// when request, can set retry times and retry delay time
axios.get(url, { retry: 3, retryDelay: 3000 });

module.exports = { _axios: axiosWithRetry(axiosInstance) };
