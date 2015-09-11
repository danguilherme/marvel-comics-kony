(function(global) {
  var logLevels = new Enum(['NONE', 'ERROR', 'INFO', 'VERBOSE'], 1);

  var activeLevel = logLevels.ERROR;

  function log(level, tag, message) {
    if (level <= activeLevel)
      kony.print('[' + logLevels[level] + '][' + tag + '] ' + message);
  }

  global.logger = {
    logLevels: logLevels,
    error: function(tag, message) {
      log(logLevels.ERROR, tag, message);
    },
    info: function(tag, message) {
      log(logLevels.INFO, tag, message);
    },
    verbose: function(tag, message) {
      log(logLevels.VERBOSE, tag, message);
    },
    setLevel: function(level) {
      if (level > 0 && level <= logLevels.length)
        activeLevel = level;
    }
  }
}(this));
