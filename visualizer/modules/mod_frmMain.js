function mod_frmMain() {
  function init() {
    frmMain.flxcRoot.btnOpenCharactersForm.onClick = btnOpenCharactersForm_onClick;
    frmMain.flxcRoot.btnOpenComicsForm.onClick = btnOpenComicsForm_onClick;
  }
  
  /* EVENT HANDLERS */
  function btnOpenCharactersForm_onClick() {
    // TODO: open frmCharactersList form
    alert('***Open frmCharactersList form***');
  }
  
  function btnOpenComicsForm_onClick() {
    // TODO: open frmCharactersList form
    alert('***Open frmComicsList form***');
  }
  
  init();
}
