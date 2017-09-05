//object that checks if character stream is currently a string, temp, or comment (do-not-parse-code)
//macros are not expanded if they are inside non-js code.
// "foo(4 + 4, 6^5)" ==> doesn't expand

var CodeState = (function(){
	//inner enum like object to name states
	var innerState = {
		BASE:0,
		D_QUOTE:1,
		S_QUOTE:2,
		TEMP:3,
		FSLASH:4,
		SLINE_COMMENT:5,
		MLINE_COMMENT:6,
		STAR:7
	};


	function CodeState(){
		this.isCode = true;
		this.state = innerState.BASE;
	}

	CodeState.prototype.input = function(char) {
		switch(this.state) {
			case innerState.BASE:
				break;
			case innerState.D_QUOTE:
				break;
			case innerState.S_QUOTE:
				break;
			case innerState.TEMP:
				break;
			case innerState.FSLASH:
				break;
			case innerState.SLINE_COMMENT:
				break;
			case innerState.MLINE_COMMENT:
				break;
			case innerState.STAR:
				break;
		}
	};
	return CodeState;
})();

exports.CodeState = CodeState;