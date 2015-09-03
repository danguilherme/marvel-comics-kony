function frmCharactersView() {
  function init() {
    frmCharacters.flxcRoot.segCharacters.onRowClick = segCharacters_onRowClick;
  }
  
  /* EVENT HANDLERS */
  function segCharacters_onRowClick() {
    alert(arguments);
  }
  
  init();
}
