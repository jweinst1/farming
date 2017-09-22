//the Base parser for Farming
//parses functional macros with option for end arbitrary parameter
//parses @def foo(a) {a + 3;} statements

var tkMatch = require('../match/tokenmatch.js');

//represents states of parser
var baseParseState = {
  START:0,
  ATSYM:1,

};

var BaseParser = (function(){
  function BaseParser(){
    
  }

  return BaseParser;
})();

exports.BaseParser = BaseParser;
