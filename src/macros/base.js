//contains the basic macro object
//acts as an information container to pass around between handlers of
//macros

var MacroBase = (function() {
  // creates a macro with specified fields but no values preset
  // note params is an array
  function MacroBase(params, components, hasArb){
    this.hasArb = hasArb; //boolean to check if last works as Arb
    this.params = {};
    this.components = components;
    this.paramOrder = params;
    this.paramCount = params.length;
    for (var i = 0; i < params.length; i++) {
      this.params[params[i]] = false;
    }
  }

  //cleans past arguments to macro
  MacroBase.prototype.clean = function () {
    for (var key in this.params) {
      this.params[key] = false;
    }
  };

  MacroBase.prototype.loadArgs = function (args) {
    if(args.length !== this.paramCount) {
      throw new Error("Improper number of arguments for macro.");
    }
    for (var i = 0; i < args.length; i++) {
      this.params[this.paramOrder[i]] = args[i]
    }
  };

  MacroBase.prototype.makeString = function (args) {
    this.loadArgs(args);
    var makeString = "";
    var hasArbitraryParam = args[args.length-1].constructor.name === 'Array';
    if(hasArbitraryParam) {
      var arbitraryLength = args[args.length-1].length;
      var arbParam = this.paramOrder[this.paramOrder.length-1];
      while(arbitraryLength--) {
        var subArbString = "";
        for (var i = 0; i < this.components.length; i++) {
          if(this.components[i] in this.params) {
            if(this.components[i] === arbParam) {
              subArbString += this.params[this.components[i]].shift();
            }
            else subArbString += this.params[this.components[i]]
          }
          else subArbString += this.components[i];
        }
        makeString += subArbString;
      }
    }
    else {
      for (var i = 0; i < this.components.length; i++) {
        if(this.components[i] in this.params) {
          makeString += this.params[this.components[i]];
        }
        else makeString += this.components[i];
      }
    }
    this.clean();
    return makeString;
  };
  return MacroBase;
})();

exports.MacroBase = MacroBase
/*
var test = new MacroBase(["a", "b"], ["console.log(", "a", ",", "b", ");"], true);
console.log(test.makeString(["333", ["4", "5", "6"]]));*/
//console.log(333,4);console.log(333,5);console.log(333,6);
