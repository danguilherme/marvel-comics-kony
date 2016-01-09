(function(global) {
  blitz.logger.setActiveLevel(blitz.logger.levels.DEBUG);

  blitz.mvc.view('main', 'frmMain', {
    init: function() {
      this.form().btnOpenCharactersForm.onClick = btnOpenCharactersForm_onClick;
      this.form().btnOpenComicsForm.onClick = btnOpenComicsForm_onClick;
    }
  });

  /* EVENT HANDLERS */
  function btnOpenCharactersForm_onClick() {
    frmCharacters.show();
  }

  function btnOpenComicsForm_onClick() {
    frmComics.show();
  }
}(this));
