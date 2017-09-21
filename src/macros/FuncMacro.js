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

  FuncMacro.prototype.hasParam = function (param) {
    return param in this.params;
  };

  FuncMacro.prototype.addComponent = function (string) {
    this.components.push(string);
  };
  //checks if the component at some index is a paramter
  FuncMacro.prototype.componentIsParam = function (index) {
    return this.components[index] in this.params;
  };

  FuncMacro.prototype.addParam = function (param, values) {
    values = values || [];
    this.params[param] = new MacroValue(param, values);
  };

  FuncMacro.prototype.setParamValue = function (param, val) {
    if(param in this.params) {
      this.params[param].pushValue(val);
    }
    else throw new Error("Parameter: " + param +  " does not exist");
  };

  FuncMacro.prototype.setParamArbValue = function (param, vals) {
    if(param in this.params) {
      for (var i = 0; i < vals.length; i++) {
        this.params[param].pushValue(vals[i]);
      }
    }
    else throw new Error("Parameter: " + param +  " does not exist");
  };

  FuncMacro.prototype.getValueForParam = function (param) {
    if(this.params[param].length === 1) return this.params[param].values[0];
    else return this.params[param].values;
  };

  FuncMacro.prototype.iterValueForParam = function (param) {
    if(this.params[param].isEmpty()) return false;
    else this.params[param].getValue();
  };

  FuncMacro.prototype.paramHasValue = function(param) {
    return !(this.params[param].isEmpty());
  };
  return FuncMacro;
})();

exports.FuncMacro = FuncMacro;