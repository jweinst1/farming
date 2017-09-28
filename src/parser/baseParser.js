//the Base parser for Farming
//parses functional macros with option for end arbitrary parameter
//parses @def foo(a) {a + 3;} statements

var tkMatch = require('../match/tokenmatch.js');

//represents states of parser
var baseParseState = {
  START:0,
  //non-parsing states
  SQUOTE:1,
  DQUOTE:2,
  TQUOTE:3,
  FSLASH:4,
  SCOMMENT:5,
  MCOMMENT:6,
  COMMSTAR:7,
  //parsing states
  SYM_AT:8,
  SYM_D:9,
  SYM_E:10,
  SYM_F:11,
  WS_PRENAME:12,
  MACNAME:13,
  PARAM_START:14,
  PARAM:15,
  PARAM_COMMA:16,
  PARAM_END:17
};

var BaseParser = (function(){
  function BaseParser(){

  }

  return BaseParser;
})();

exports.BaseParser = BaseParser;
