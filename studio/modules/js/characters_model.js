(function(global) {
  "use strict";

  var RESOURCE_ID = "comics"; // characters resource is out

  mvc.Model.characters = new mvc.Model("characters", {
    getCharacters: function getCharacters(callback) {
      marvelService.doRequest(RESOURCE_ID, callback);
    }
  });
}(this));
