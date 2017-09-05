//object that checks if character stream is currently a string, temp, or comment (do-not-parse-code)
//macros are not expanded if they are inside non-js code.
// "foo(4 + 4, 6^5)" ==> doesn't expand

var CodeState = (function(){

	var innerState = {

	};


	function CodeState(){
		this.isCode = true;
	}
	return CodeState;
})();

exports.CodeState = CodeState;