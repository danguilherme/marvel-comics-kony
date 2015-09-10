var frmCharactersModel = function() {
	var RESOURCE_ID = 'characters';

	function getCharacters() {
		marvelService.doRequest(RESOURCE_ID, function() {
			alert(arguments);
		});
	}

	return {
		getCharacters: getCharacters
	};
}();
