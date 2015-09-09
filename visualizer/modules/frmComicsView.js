var frmComicsView = function() {
  function init() {
    if (typeof(frmComicsController) !== "undefined")
      frmComicsController();
  }

  function open(maxItems) {
  	maxItems = maxItems || 20;
  	frmComics.show();
  }

  /* EVENT HANDLERS */
  
  return {
  	init: init,
  	open: open
  };
}();