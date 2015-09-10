/**
 * kony.net.HttpRequest wrapper module
 * http://docs.kony.com/konyonpremises/default.htm#../Subsystems/API_Reference_Guide/content/network_apis.htm#HttpRequ%3FTocPath%3DKony%2520Studio%7CAPI%2520Reference%2520Guide%7CNetwork%2520APIs%7C_____6
 */
var http = function() {
  /*
    HttpRequest.readyState
      0 - constants.HTTP_READY_STATE_UNSENT
      1 - constants.HTTP_READY_STATE_OPENED
      2 - constants.HTTP_READY_STATE_HEADERS_RECEIVED
      3 - constants.HTTP_READY_STATE_LOADING
      4 - constants.HTTP_READY_STATE_DONE

    HttpRequest.responseType
      constants.HTTP_RESPONSE_TYPE_TEXT
      constants.HTTP_RESPONSE_TYPE_JSON
      constants.HTTP_RESPONSE_TYPE_DOCUMENT
      constants.HTTP_RESPONSE_TYPE_RAWDATA

   */

  var TIMEOUT = 1000 * 60 * 5; // 5 minutes

  function createRequest(method, url) {
    var request = new kony.net.HttpRequest();
    request.open(method, url);

    request.setRequestHeader('User-Agent', (appConfig.appName + '/' + appConfig.appVersion));

    return request;
  }

  function createFormDataFromObject(object) {
    var formData = new kony.net.FormData();

    for (var key in object)
      if (object.hasOwnProperty(key))
        formData.append(key, object[key]);

    return formData;
  }

  /**
   * Creates a function to be used as listener for onReadyStateChange event.
   * @param  {Function} onSuccess Function to execute when request finishes successfully
   * @param  {Function} onFail    Function to execute if the request fails for any reason
   * @return {Function}           Callback function to be assigned to onReadyStateChange event
   */
  function onReadyStateChange(onSuccess, onFail) {
    var request = this;

    return function() {
      var readyState = +request.readyState;
      var status = +request.status;

      if (readyState === constants.HTTP_READY_STATE_DONE) {
        if (status >= 200 && status <= 299)
          onSuccess && onSuccess(request.response);
        else
          onFail && onFail(request);
      }
    }
  }

  function get(url, successCallback, errorCallback) {
    var request = createRequest(constants.HTTP_METHOD_GET, url);

    request.onReadyStateChange = onReadyStateChange(successCallback, errorCallback);

    request.send();
    return request;
  }

  function post(url, body, successCallback, errorCallback) {
    var request = createRequest(constants.HTTP_METHOD_POST, url);

    request.onReadyStateChange = onReadyStateChange(successCallback, errorCallback);

    request.send(!body ? null : createFormDataFromObject(body));
    return request;
  }

  return {
    get: get,
    post: post
    // put: put,
    // delete: delete
  }
}();
