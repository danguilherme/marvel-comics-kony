(function(global) {
  /**
   * EventTarget is an interface implemented by objects that can receive events and may have listeners for them.
   */
  function EventTarget() {
    /**
     * Get the listener functions bound to this EventTarget instance
     * 
     * @return {Object} An object with event name and an array of handler functions.
     */
    this.getEventListeners = function() {
      if (!this.eventListeners)
        this.eventListeners = {};
      return this.eventListeners;
    }

    /**
     * Registers a handler to be executed when the given event is dispatched
     *
     * @param  {String} eventName The event name to listen.
     * @param  {Function} handler   Function called when event is triggered.
     * @return {Boolean}           True if the listener was successfully bound and false otherwise.
     */
    this.addEventListener = function(eventName, handler) {
      this.getEventListeners()[eventName] = this.getEventListeners()[eventName] || [];
      if (!handler || typeof(handler) !== 'function')
        return false;

      this.getEventListeners()[eventName].push(handler);

      return true;
    }

    /**
     * Removes a previously registered handler from the given event.
     *
     * @param  {String} eventName The event name to remove the handler.
     * @param  {Function} handler   Function reference that must be removed.
     */
    this.removeEventListener = function(eventName, handler) {
      var eventCollection = this.getEventListeners()[eventName];
      if (!eventCollection || eventCollection.length == 0)
        return;

      for (var i = 0; i < eventCollection.length; i++)
        if (eventCollection[i] === handler)
          eventCollection.splice(i, 1);
    }

    /**
     * Triggers the given event.
     *
     * @param  {String} eventName The event name to trigger.
     */
    this.dispatchEvent = function(eventName) {
      var eventCollection = this.getEventListeners()[eventName];
      if (!eventCollection || eventCollection.length == 0)
        return;

      for (var i = 0; i < eventCollection.length; i++)
        eventCollection[i].call(this);
    }
  }
}(this));
