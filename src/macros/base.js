//contains the basic macro object
//acts as an information container to pass around between handlers of
//macros

var MacroBase = (function() {
  // creates a macro with specified fields but no values preset
  // note params is an array
  function MacroBase(params, components){
    this.params = {};
    this.components = components;
    this.paramOrder = params;
    for (var i = 0; i < params.length; i++) {
      this.params[params[i]] = false;
    }
  }

  MacroBase.prototype.makeString = function (args, hasArbitraryParam) {
    hasArbitraryParam = hasArbitraryParam || false;
    
  };
  return MacroBase;
})();

exports.MacroBase = MacroBase
