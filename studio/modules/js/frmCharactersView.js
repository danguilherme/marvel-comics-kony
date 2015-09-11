(function(global) {
  global.frmCharactersView = new View('frmCharacters', {
    init: function() {
      frmCharacters.flxcRoot.segCharacters.onRowClick = segCharacters_onRowClick;

      this.dispatchEvent('ready');
    },

    updateView: function() {
      alert(this.viewBag().characters);
    }
  });

  /* EVENT HANDLERS */
  function segCharacters_onRowClick() {
    alert(arguments);
  }
}(this));
