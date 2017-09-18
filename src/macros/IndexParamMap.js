//Param -> index map data structure

var ParamMap = function(params) {
  this.map = {};
  for (var i = 0; i < params.length; i++) {
    this.map[params[i]] = param;
    this.map[param] = i;
  }
  this.length = params.length;
}

ParamMap.prototype.add = function (param) {
  this.map[param] = this.length++;
  this.map[this.length] = param;
};

exports.ParamMap = ParamMap;
