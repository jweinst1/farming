

/**
  * Implements the MacroTrie data structure used for storing nestable textComponents
  * macros.
  * Example:
  * Phrase = ["@", "@", "%%%CODE", "\n"]
  * note: %%%CODE and %%%END are reserved symbols for macros
  */

var reservedMacroSymbols = {
  "%%%CODE":true,
  "%%%END":true,
  "@def":true
};

var isReservedMacroSym = function(word) {
  return word in reservedMacroSymbols;
};

exports.isReservedMacroSym = isReservedMacroSym;

var MacroTrie = (function(){
  function MacroTrie(){
    this.trie = {};
  }

  MacroTrie.prototype.getTrieJSON = function (spacing) {
    return JSON.stringify(this.trie, null, spacing)
  };

  MacroTrie.prototype.checkRoot = function(char) {
    return char in this.trie;
  };

  MacroTrie.prototype.insert = function (seq) {
    var currentNode = this.trie;
    for (var i = 0; i < seq.length; i++) {
      if(seq[i] in currentNode) currentNode = currentNode[seq[i]];
      else {
        currentNode[seq[i]] = {};
        currentNode = currentNode[seq[i]];
      }
    }
    currentNode["%%%END"] = true;
  };

  return MacroTrie;
})();

exports.MacroTrie = MacroTrie;
