(function(global) {
  global.frmComicsView = new View('frmComics', {
    init: function() {
      if (typeof(frmComicsController) !== "undefined")
        frmComicsController();

      this.dispatchEvent('ready');
    },
    open: function(maxItems) {
    	maxItems = maxItems || 20;
    	frmComics.show();
    }
  });
}(this));
