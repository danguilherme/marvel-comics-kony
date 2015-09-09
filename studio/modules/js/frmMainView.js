var frmMainView = function() {
  function init() {
    frmMain.flxcRoot.btnOpenCharactersForm.onClick = btnOpenCharactersForm_onClick;
    frmMain.flxcRoot.btnOpenComicsForm.onClick = btnOpenComicsForm_onClick;
  }
  
  /* EVENT HANDLERS */
  function btnOpenCharactersForm_onClick() {
    frmCharacters.show();
  }
  
  function btnOpenComicsForm_onClick() {
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
