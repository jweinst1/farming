//new file for the main Farming Macro object.
//Instances of this class are parsed from source code.

//small object class to synchronize string storage in macro.
function StringValue(string) {
  this.str = string;
  this.toString = function() {
    return this.str;
  }
}

var FarmingMacro = (function(){

  function FarmingMacro(){

  }
  return FarmingMacro;
})();

exports.FarmingMacro = FarmingMacro;
