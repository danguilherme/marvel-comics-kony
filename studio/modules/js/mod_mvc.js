(function(global) {
  "use strict";

  var TAG = "mod_mvc";

  /* VIEW */
  /**
   * Class responsible to manage views lifecycle and data handling.
   * @param {string} formId Id of the Kony form this view represents.
   * @param {Object} config Configuration object
   * @param {Function} config.init Startup function used to bind component event listeners
   * @param {Function} config.updateView Template function called when viewbag is modified
   */
  function View(formId, config) {
    var me = this;
    utils.extend(this, {}, config);

    this.formId = formId;


    logger.verbose(TAG, "View created for " + formId);

    var viewBag = new ViewBag();
    viewBag.addEventListener("change", onViewBagChange);

    function onViewBagChange() {
      me.updateView();
    }

    this.viewBag = function() {
      return viewBag;
    };

    /**
     * Opens the form this view represents by calling Kony `show` method.
     *
     * @function open
     */
  }
  View.prototype.form = function() {
    return global[this.formId];
  };
  View.prototype.open = function() {
    this.form().show();
  };
  utils.extend(View.prototype, new EventTarget());

  /**
   * Holds data to be transfered between controllers and views.
   */
  function ViewBag() {
    var me = this;

    /**
     * Add data to ViewBag.
     * @param  {String} key   Data identifier
     * @param  {Object|String|Number} value The data itself
     * @return {ViewBag}       Its instance for chaining.
     */
    this.add = function(key, value) {
      logger.info(TAG, "ViewBag add item; " + key + " = " + (value ? JSON.stringify(value) : value));

      me[key] = value;
      return me;
    };

    this.notifyChanges = function() {
      logger.verbose(TAG, "ViewBag notifyChanges");

      me.dispatchEvent("change");
      return me;
    };
  }
  utils.extend(ViewBag.prototype, new EventTarget());

  /* MODEL */
  function Model() {

  }

  /* CONTROLLER */
  function Controller() {

  }

  global.mvc = {
    Model: Model,
    View: View,
    Controller: Controller
  };
}(this));
