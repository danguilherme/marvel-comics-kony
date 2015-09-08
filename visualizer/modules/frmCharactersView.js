var frmCharactersView = function() {
  function init() {
    frmCharacters.flxcRoot.segCharacters.onRowClick = segCharacters_onRowClick;
    

    if (typeof(frmCharactersController) !== "undefined")
      frmCharactersController();
  }
  
  /* EVENT HANDLERS */
  function segCharacters_onRowClick() {
    alert(arguments);
  }

  /* METHODS */
  function open() {
    frmCharacters.show();
  }

  return {
    init: init,
    open: open
  };
}();