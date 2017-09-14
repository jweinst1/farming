//utilizes a custom parsing approach to macros

//parses a ** prefix macro on the same line
var ParseStarStarPrefix = (function() {
  //4 states, parses until end of line
  var parseState = {
    BASE: 0,
    STAR1: 1,
    STAR2: 2,
    EXP: 3
  };

  var whiteSpace = {
    ' ':true,
    '\n':true,
    '\t':true
  };

  function ParseStarStarPrefix(string) {
    var state = parseState.BASE;
    var expr = "";
    for (var i = 0; i < string.length; i++) {
      switch (state) {
        case parseState.BASE:
          if(string[i] === '*') state = parseState.STAR1;
          break;
        case parseState.STAR1:
          if(string[i] === '*') state = parseState.STAR2;
          else state = parseState.BASE;
          break;
        case parseState.STAR2:
          if(!(string[i] in whiteSpace)) {
            state = parseState.EXP;
            expr += string[i];
          }
          break;
        case parseState.EXP:
          if(string[i] === '\n') return expr;
          else expr += string[i];
          break;
      }
    }
    return expr;
  }
  return ParseStarStarPrefix;
})();

// test
console.log(ParseStarStarPrefix("r  ff ** 5 + 6\n"));
console.log(ParseStarStarPrefix("r  ff **\n 5 + 6\n"));
console.log(ParseStarStarPrefix("r  ff **\n 5 + 4\n + 6\n"));
