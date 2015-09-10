var frmCharactersController = function() {
	function loadCharacters() {
		kony.print("LOADING CHARACTERS...");
		frmCharactersModel.getCharacters(
			function(data) {
				kony.print("CHARACTERS LOADED");
				frmCharactersView.viewBag().add('characters', data).notifyChanges();
			},
			function() {
				alert('feiou')
			});
	}

	return {
		loadCharacters: loadCharacters
	}
}();
