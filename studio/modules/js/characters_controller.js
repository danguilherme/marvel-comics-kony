(function(global) {
  "use strict";

  var TAG = "characters_controller";

  var controller = mvc.Controller.characters = new mvc.Controller("characters", {
    loadCharacters: function loadCharacters() {
      logger.verbose(TAG, "LOADING CHARACTERS...");
      mvc.Model.characters.getCharacters(
        function(data) {
          logger.verbose(TAG, "CHARACTERS LOADED");

          this.view()
            .viewBag()
            .add("characters", data)
            .notifyChanges();
        },
        function() {
          logger.error(TAG, "feiou");
        });
    }
  });
}(this));
