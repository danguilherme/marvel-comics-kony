(function(global) {
  var TAG = 'comics_view';
  var maxItems = 20;
  blitz.mvc.view('comics', 'frmComics', {
    onPostShow: function() {
      blitz.http.get('https://httpbin.org/get').then(function(response) {
        blitz.logger.info(TAG, typeof response);
        blitz.logger.verbose(TAG, response);
        blitz.logger.info(TAG, response.origin);
      });
    },
    open: function(itemsLimit) {
      if (itemsLimit)
        maxItems = itemsLimit;
      this.form().show();
    }
  });
}(this));
