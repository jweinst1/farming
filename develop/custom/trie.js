//implementation of trie data structure for macro matching
//end character is %%END

var Trie = (function(){

  function isReserved(key){
    return key === '%%END';
  }

  function Trie(){
    this.trie = {};
  }
  //inserts array of strings into the trie
  Trie.prototype.insert = function (seq) {
    var currentNode = this.trie;
    var last = seq.length-1;
    for (var i = 0; i < seq.length; i++) {
      if(isReserved(seq[i])) throw new Error("Key Error %%END is reserved.");
      else if(seq[i] in currentNode) currentNode = currentNode[seq[i]];
      else {
        currentNode[seq[i]] = {};
        currentNode = currentNode[seq[i]];
      }
    }
    currentNode["%%END"] = true; //signifies an ending branch
  };

  Trie.prototype.contains = function (seq) {
    
  };
  return Trie;
})();
/*
var a = new Trie();
a.insert("f f g d f".split(" "));
console.log(JSON.stringify(a.trie, null, 2));

{
  "f": {
    "f": {
      "g": {
        "d": {
          "f": {
            "%%END": true
          }
        }
      }
    }
  }
}*/
