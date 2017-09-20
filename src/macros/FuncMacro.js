//functional macro
//implements object that can be exported to JSON as well.
// EXAMPLE ::: @def name(arg1, arg2) {console.log(arg1, arg2)}

//small object that stores parameter value or arbitrary values
function MacroValue(param, values) {
  this.param = param;
  this.values = values;

  MacroValue.prototype.getValue = function() {
    return this.values.unshift();
  };

  MacroValue.prototype.pushValue = function(val) {
    this.values.push(val);
  };

  MacroValue.prototype.isEmpty = function () {
    return this.values.length === 0;
  };
}

var makeMacroValue = function(obj) {
  return new MacroValue(obj.param, obj.values.slice());
};


var FuncMacro = (function(){
  function FuncMacro(){
    this.params = {};
    this.components = [];
  }

  FuncMacro.prototype.addComponent = function (string) {
    this.components.push(string);
  };

  FuncMacro.prototype.addParam = function (param, values) {
    this.params[param] = new MacroValue(param, values);
  };
  return FuncMacro;
})();

exports.FuncMacro = FuncMacro;
