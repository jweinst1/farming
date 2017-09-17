//Param -> index map data structure

function ParamMap(params) {
  for (var i = 0; i < params.length; i++) {
    this[params[i]] = [];
    
  }
}
