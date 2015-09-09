var frmCharactersView = function() {
  function init() {
    frmCharacters.flxcRoot.segCharacters.onRowClick = segCharacters_onRowClick;
  }
  
  /* EVENT HANDLERS */
  function segCharacters_onRowClick() {
    alert(arguments);
  }

  /* METHODS */
  function open() {
    frmCharacters.show();
  }

  
  alert('frmCharactersView.js');
  
  return {
    init: init,
    open: open
  };
}();