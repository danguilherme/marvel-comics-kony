(function(global) {
  "use strict";

  var TAG = "characters_view";

  var view = mvc.View.characters = new mvc.View("frmCharacters", {
    init: function() {
      this.form().flxcRoot.segCharacters.onRowClick = segCharacters_onRowClick;

      this.dispatchEvent("ready");
    },

    updateView: function() {
      logger.verbose(TAG, this.viewBag().characters);
    }
  });

  /* EVENT HANDLERS */
  function segCharacters_onRowClick() {
    logger.verbose(TAG, arguments);
  }
}(this));
