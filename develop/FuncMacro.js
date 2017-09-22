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

  MacroValue.prototype.isArbitrary = function () {
    return this.values.length > 1;
  };
}

var makeMacroValue = function(obj) {
  return new MacroValue(obj.param, obj.values.slice());
};


var FuncMacro = (function(){
  function FuncMacro(){
    this.params = {};
    this.components = [];
    this.hasArbParam = false; //can only have one arbitrary parameter
    this.acceptingParams = true;
  }

  FuncMacro.prototype.clean = function () {
    this.params = {};
    this.components = [];
    this.hasArbParam = false;
    this.acceptingParams = true;
  };

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
    this.components.push(param);
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

  FuncMacro.prototype.loadValuesFromObject = function (dict) {
    for (var key in dict) {
      if(dict[key].constructor.name === 'Array') {
        this.addParam(key, dict[key]); //arbitrary parameter
      }
      else this.addParam(key, [dict[key]]);
    }
  };

  FuncMacro.prototype.validateParamsNotEmpty = function () {
    for (var key in this.params) {
      if(this.params[key].isEmpty()) return false;
    }
    return true;
  };

  FuncMacro.prototype.makeString = function () {
    if(!this.validateParamsNotEmpty()) throw new Error("Func Macro parameters not entirely set.");
    var madeString = "";
    for (var i = 0; i < this.components.length; i++) {
      if(this.componentIsParam(i)) {
        madeString += this.getValueForParam(this.components[i]);
      }
      else madeString += this.components[i];
    }
    return madeString;
  };
  return FuncMacro;
})();

exports.FuncMacro = FuncMacro;

var test = new FuncMacro();
test.addComponent("console.log(");
test.addParam("arg", "5, 5, 5");
test.addComponent(");");
console.log(test.makeString());
