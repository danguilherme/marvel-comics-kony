var frmMainView = function() {
  function init() {
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
  
  alert('frmMainView.js');
  
  return {
    init: init,
    open: open
  };
}();
