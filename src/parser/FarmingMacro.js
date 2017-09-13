//new file for the main Farming Macro object.
//Instances of this class are parsed from source code.

//small object class to synchronize string storage in macro.
function StringValue(string) {
  this.str = string;
  StringValue.prototype.toString = function() {
    return this.str;
  }
}

//closures that set a specific index in the macro's elements
function makeIndexSetter(index, arr) {
  return function(strTemp) {
    arr[index].str = strTemp;
    return true;
  };
}

var FarmingMacro = (function() {
  function FarmingMacro() {
    this.elements = [];
    this.paramIndexes = {};
  }

  FarmingMacro.prototype.addStringElem = function(string) {
    this.elements.push(new StringValue(string));
  };

  FarmingMacro.prototype.toString = function () {
    var computeString = "";
    for (var i = 0; i < this.elements.length; i++) {
      computeString += this.elements[i].toString();
    }
    return computeString;
  };

  FarmingMacro.prototype.addParam = function (param) {
    if(!(param in this.paramIndexes)) this.paramIndexes[param] = [];
  };
  return FarmingMacro;
})();

exports.FarmingMacro = FarmingMacro;
