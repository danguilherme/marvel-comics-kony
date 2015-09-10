(function(global) {
  /* VIEW */
  function View(formId, config) {
    /*
      config = {
        // required - hook event listeners
        init: Function,
        // required - called when viewbag is modified
        updateView: Function,
        // used by controllers to open the view.
        open: Function,
      }
     */
    extend(this, config);

    var viewBag = new ViewBag(onViewBagChange);
    function onViewBagChange() {
      me.updateView();
    }

    this.form = function() {
      return global[formId];
    }

    this.viewBag = function() {
      return viewBag;
    }

    this.open = this.open || function() {
      this.form().show();
    }
  }

  function ViewBag(onChange) {
    var me = this;

    this.add = function(key, value) {
      kony.print('ViewBag add item; ' + key + ' = ' + (!!value ? JSON.stringify(value) : value));
      me[key] = value;
      return me;
    }

    this.notifyChanges = function() {
      kony.print('ViewBag notifyChanges');
      onChange && onChange(me);
      return me;
    };
  }

  global.View = View;
}(this));


/****** OBJECT EXTEND *******/
// https://github.com/jquery/jquery/blob/1.3.0/src/core.js#L545-L593
var extend = function() {
  // copy reference to target object
  var target = arguments[0] || {},
    i = 1,
    length = arguments.length,
    deep = false,
    options;

  // Handle a deep copy situation
  if (typeof target === "boolean") {
    deep = target;
    target = arguments[1] || {};
    // skip the boolean and the target
    i = 2;
  }

  // Handle case when target is a string or something (possible in deep copy)
  if (typeof target !== "object" && !jQuery.isFunction(target))
    target = {};

  // extend jQuery itself if only one argument is passed
  if (length == i) {
    target = this;
    --i;
  }

  for (; i < length; i++)
  // Only deal with non-null/undefined values
    if ((options = arguments[i]) != null)
    // Extend the base object
      for (var name in options) {
      var src = target[name],
        copy = options[name];

      // Prevent never-ending loop
      if (target === copy)
        continue;

      // Recurse if we're merging object values
      if (deep && copy && typeof copy === "object" && !copy.nodeType)
        target[name] = jQuery.extend(deep,
          // Never move original objects, clone them
          src || (copy.length != null ? [] : {}), copy);

      // Don't bring in undefined values
      else if (copy !== undefined)
        target[name] = copy;

    }

    // Return the modified object
  return target;
};
