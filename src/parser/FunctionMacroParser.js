//parser for standard function macros


//container class for parsed out components of functional macro
var FunctionMacroContainer = function() {
	this.name = null;
	this.params = [];
	this.textComponents = [];
	FunctionMacroContainer.prototype.addParam = function(param) {
		this.params.push(params);
	};

	FunctionMacroContainer.prototype.addTextComponent = function(text) {
		this.textComponents.push(text);
	};

	FunctionMacroContainer.prototype.setName = function(name) {
		this.name = name;
	};
};

exports.FunctionMacroContainer = FunctionMacroContainer;


//top level parser for function macros
var FunctionMacroParser = (function(){
	function FunctionMacroParser(){

	};

	return FunctionMacroParser;
})();

exports.FunctionMacroParser = FunctionMacroParser;