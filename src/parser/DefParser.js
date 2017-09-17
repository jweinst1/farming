//implements the parsing of @def statements to parse macro definitions
//also implements def parser containers


var ParamIndexMap = function(params) {
  for (var i = 0; i < params.length; i++) {
    this[params[i]] = [];
  }
}

var DefMacroContainer = (function() {
  function DefMacroContainer(){
    this.phrase = [];
  }
  return DefMacroContainer;
})();

var DefParser = (function(){
  function DefParser(){

  }
  return DefParser;
})();
