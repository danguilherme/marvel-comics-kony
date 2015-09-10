var marvelService = function() {
  var publicKey = 'bdae238cca3e4f2882d1aca7f39bf482';
  var privateKey = 'cd461297b0dcf44a70f8499d405c1fdc0daafcbd';

  var baseUrl = 'http://gateway.marvel.com/v1/public/';
  //characters?apikey=' + publicKey; // + '&ts=' + ts + '&hash=' + hash

  function createHash(timestamp) {
    return md5(timestamp + privateKey + publicKey);
  }

  /**
   * Makes a request to the Marvel API
   * @param  {String}   resource The REST resource name
   * @param  {Function} callback (optional) Called when request is finished.
   */
  function consumeApi(resource, callback) {
    var timestamp = +new Date();
    var url = baseUrl + resource + '?apikey=' + publicKey + '&ts=' + timestamp + '&hash=' + createHash(timestamp);

    return http.get(url, callback);
  }

  /* TEST CODE */
  function getUsingServiceSyntax(resource, callback) {
    var timestamp = +new Date();
    var url = baseUrl + resource + '?apikey=' + publicKey + '&ts=' + timestamp + '&hash=' + createHash(timestamp);

    var myHttpHeaders = {};
    var inputParamTable = {
      appID: "Marvel",
      //serviceID: "nonEcziste",
      //channel: "rc",
      httpheaders: myHttpHeaders
    };
    var connHandle = kony.net.invokeServiceAsync(
      url,
      inputParamTable,
      function() {
        doRequest_callback.apply(this, arguments);
        callback && callback.apply(this, arguments);
      });
  }

  function doRequest_callback(status, resulttable) {
    if (status == 400) {
      alert('opstatus = ' + resulttable["opstatus"]);
    }
  }
  /* [END] TEST CODE */

  return {
    doRequest: consumeApi
  };
}();
