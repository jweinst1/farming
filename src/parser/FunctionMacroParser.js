//parser for standard function macros


//container class for parsed out components of functional macro
// arbitrary paramter is indicated via a right *, e.g @define set(a*) { [a] }
var FunctionMacroContainer = function() {
	this.arbitraryParam = false;
	this.arbitraryParamName = null;
	this.name = null;
	this.params = [];
	this.textComponents = [];

	FunctionMacroContainer.prototype.setArbitrarySetting = function(option) {
		this.arbitraryParam = option;
	};

	FunctionMacroContainer.prototype.setArbitraryName = function(name) {
		this.arbitraryParamName = name;
	};

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

//various states for the parser,
//named like an enum for convenience
var FunctionMacroState = {
	BEGIN:0,
	FSLASH:1,
	LINE_COMMENT:2,
	MLINE_COMMENT:3,
	STRING:4,
	TEMP_STRING:5,
	DEF_SYN:6,
	DEF_WSPACE:7,
	DEF_NAME:8
};

exports.FunctionMacroState = FunctionMacroState;

//top level parser for function macros
var FunctionMacroParser = (function(){
	function FunctionMacroParser(){
		this.state = 0;
	};

	return FunctionMacroParser;
})();

exports.FunctionMacroParser = FunctionMacroParser;