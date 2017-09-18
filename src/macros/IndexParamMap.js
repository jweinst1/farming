//Param -> index map data structure

function ParamMap(params) {
  this.map = {};
  for (var i = 0; i < params.length; i++) {
    this.map[params[i]] = param;
    this.map[param] = i;
  }
  this.length = params.length;
}
