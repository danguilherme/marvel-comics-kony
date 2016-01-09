(function(global) {
  blitz.mvc.view('characters', 'frmCharacters', {
    init: function() {
      this.form().segCharacters.onRowClick = segCharacters_onRowClick;
    }
  });

  /* EVENT HANDLERS */
  function segCharacters_onRowClick() {
    alert(arguments);
  }
}(this));
