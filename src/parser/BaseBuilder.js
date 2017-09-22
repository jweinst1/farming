//contains a helper class that builds a base macro as its being parsed
//also contains class that deals with building a call to a macro

var BaseMacroBuilder = (function(){
  function BaseBuilder(){
    this.currentComp = "";
    this.currentParam = "";
    this.components = [];
    this.params = [];
    this.hasArbParam = false;
  }

  BaseMacroBuilder.prototype.setArbSetting = function (setting) {
    this.hasArbParam = setting;
  };

  BaseMacroBuilder.prototype.pushComp = function () {
    this.components.push(this.currentComp);
    this.currentComp = "";
  };

  BaseMacroBuilder.prototype.pushParam = function () {
    this.params.push(this.currentParam);
    this.components.push(this.currentParam); // all params exist as components
    this.currentParam = "";
  };

  //returns object that contains the params and componenets of the macro
  BaseMacroBuilder.prototype.getMacroParts = function () {
    return {
      components:this.components,
      params:this.params,
      hasArbParam:this.hasArbParam
    };
  };

  return BaseMacroBuilder;
})();

exports.BaseMacroBuilder = BaseMacroBuilder

var BaseCallBuilder = (function(){
  function BaseCallBuilder() {
    this.macroName = "";
    this.currentArg = "";
    this.args = [];
  }

  return BaseCallBuilder;
})();

exports.BaseCallBuilder = BaseCallBuilder;
