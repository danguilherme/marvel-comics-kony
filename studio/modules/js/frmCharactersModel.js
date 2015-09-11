var frmCharactersModel = function() {
	var RESOURCE_ID = 'comics'; // characters resource is out

	function getCharacters(callback) {
		marvelService.doRequest(RESOURCE_ID, callback);
	}

	return {
		getCharacters: getCharacters
	};
}();
