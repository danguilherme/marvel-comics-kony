var frmMainView = function() {
  function init() {
    logger.setLevel(logger.logLevels.VERBOSE);

    frmMain.flxcRoot.btnOpenCharactersForm.onClick = btnOpenCharactersForm_onClick;
    frmMain.flxcRoot.btnOpenComicsForm.onClick = btnOpenComicsForm_onClick;
  }

  /* EVENT HANDLERS */
  function btnOpenCharactersForm_onClick() {
  	kony.modules.loadFunctionalModule("characters");
    frmCharacters.show();
  }

  function btnOpenComicsForm_onClick() {
  	kony.modules.loadFunctionalModule("comics");
    frmComics.show();
  }

  /* METHODS */
  function open() {
    frmMain.show();
  }

  return {
    init: init,
    open: open
  };
}();
