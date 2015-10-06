(function(global) {
  "use strict";

  var view = mvc.View.comics = new mvc.View('frmComics', {
    init: function() {
      this.dispatchEvent("ready");
    },
    open: function(maxItems) {
      maxItems = maxItems || 20;
      frmComics.show();
    }
  });
}(this));
