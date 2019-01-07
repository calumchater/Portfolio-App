var axios = require('axios');
/**
 * Create an Axios Client with defaults
 */
const defaultClient = axios.create({
  baseURL: '',
  withCredentials: true
});

/**
 * Request Wrapper with default success/error actions
 */
const request = function(options, baseUrl) {

  console.log(baseUrl);
  let dynamicClient = undefined;
  if (baseUrl) {
    dynamicClient = axios.create({
      baseURL: baseUrl
    })
  }

  const onSuccess = function(response) {
    console.debug('Request Successful!', response);
    return response.data;
  }

  const onError = function(error) {
    console.error('Request Failed:', error.config);

    if (error.response) {
      // Request was made but server responded with something
      // other than 2xx
      console.error('Status:',  error.response.status);
      console.error('Data:',    error.response.data);
      console.error('Headers:', error.response.headers);

    } else {
      // Something else happened while setting up the request
      // triggered the error
      console.error('Error Message:', error.message);
    }

    return Promise.reject(error.response || error.message);
  }

  let requestClient = (dynamicClient !== undefined) ? dynamicClient : defaultClient;
  return requestClient(options)
    .then(onSuccess)
    .catch(onError);
}

export default request;
