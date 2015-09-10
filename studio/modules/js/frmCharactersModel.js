var frmCharactersModel = function() {
	var RESOURCE_ID = 'characters';

	function getCharacters(callback) {
		marvelService.doRequest(RESOURCE_ID, callback);
	}

	return {
		getCharacters: getCharacters
	};
}();
