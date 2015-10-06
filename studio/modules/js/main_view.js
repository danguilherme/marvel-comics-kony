(function(global) {
  "use strict";

  mvc.View.main = new mvc.View("frmMain", {
    init: function() {
      logger.setLevel(logger.logLevels.VERBOSE);

      var form = this.form();

      form.flxcRoot.btnOpenCharactersForm.onClick = btnOpenCharactersForm_onClick;
      form.flxcRoot.btnOpenComicsForm.onClick = btnOpenComicsForm_onClick;
    },

    open: function open() {
      this.form().show();
    }
  });

  /* EVENT HANDLERS */
  function btnOpenCharactersForm_onClick() {
    kony.modules.loadFunctionalModule("characters");
    frmCharacters.show();
  }

  function btnOpenComicsForm_onClick() {
    kony.modules.loadFunctionalModule("comics");
    frmComics.show();
  }
}(this));
