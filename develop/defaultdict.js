var DefaultDict = function(){
  this.map = {};
  for (var i = 0; i < arguments.length; i++) {
    this.map[arguments[i]] = false;
  }
  DefaultDict.prototype.add = function (param, val) {
    val = val || false;
    this.map[param] = val;
  };
  //keys array method incase object.keys() is not supported
  DefaultDict.prototype.getKeys = function () {
    var keys = [];
    for (var key in this.map) {
      keys.push(key);
    }
    return keys;
  };
};
