//functional macro
//implements object that can be exported to JSON as well.
// EXAMPLE ::: @def name(arg1, arg2) {console.log(arg1, arg2)}

//small object that loads paramter calues
var DefaultDict = function(){
  for (var i = 0; i < arguments.length; i++) {
    this[arguments[i]] = false;
  }
  DefaultDict.prototype.add = function (param, val) {
    val = val || false;
    this[param] = val;
  };
};

var FuncMacro = (function(){
  function FuncMacro(){
    this.params = {};
  }
  return FuncMacro;
})();

exports.FuncMacro = FuncMacro;
