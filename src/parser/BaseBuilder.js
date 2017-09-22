//contains a helper class that builds a base macro as its being parsed
//also contains class that deals with building a call to a macro

var BaseMacroBuilder = (function(){
  function BaseBuilder(){
    this.currentComp = "";
    this.currentParam = "";
    this.components = [];
    this.params = [];
  }

  BaseMacroBuilder.prototype.pushComp = function () {
    this.components.push(this.currentComp);
    this.currentComp = "";
  };

  return BaseMacroBuilder;
})();

exports.BaseMacroBuilder = BaseMacroBuilder
