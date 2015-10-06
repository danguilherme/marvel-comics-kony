/**
 * Merge the contents of two or more objects together into the first object.
 * @source https://github.com/jquery/jquery/blob/1.3.0/src/core.js#L545-L593
 *
 * @param {Boolean} deep (optional) If true, the merge becomes recursive (aka. deep copy).
 * @param {Object} target An object that will receive the new properties if additional objects are passed in.
 * @param {Object} object1 An object containing additional properties to merge in.
 * @param {Object} objectN (optional) Additional objects containing properties to merge in.
 * @return {Object} Return the modified object
 */
function extend() {
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