

/**
  * Implements the MacroTrie data structure used for storing nestable textComponents
  * macros.
  * Example:
  * Phrase = ["@@", "%%%CODE"]
  * note: %%%CODE and %%%END are reserved symbols for macros
  */

var reservedMacroSymbols = {
  "%%%CODE":true,
  "%%%END":true
};

var isReservedMacroSym = function(word) {
  return word in reservedMacroSymbols;
};

exports.isReservedMacroSym = isReservedMacroSym;

var MacroTrie = (function(){
  function MacroTrie(){
    this.trie = {};
    
  }
  return MacroTrie;
})();

exports.MacroTrie = MacroTrie;
