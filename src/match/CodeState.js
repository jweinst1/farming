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

	//lookup table for quick transition from base state
	var baseTransition = {
		'"':1,
		"'":2,
		'`':3,
		'/':4
	};


	function CodeState(){
		this.state = innerState.BASE;
	}

	CodeState.prototype.input = function(char) {
		switch(this.state) {
			case innerState.BASE:
				if(char in baseTransition) this.state = baseTransition[char];
				return !this.state;
			case innerState.D_QUOTE:
				if(char === '"') {
					this.state = innerState.BASE;
					return !0;
				}
				else return !this.state;
				break;
			case innerState.S_QUOTE:
				if(char === "'") {
					this.state = innerState.BASE;
					return !0;
				}
				else return !this.state;
			case innerState.TEMP:
				if(char === '`') {
					this.state = innerState.BASE;
					return !0;
				}
				else return !this.state;
			case innerState.FSLASH:
				if(char === '/') this.state = innerState.SLINE_COMMENT;
				else if(char === '*' ) this.state = innerState.MLINE_COMMENT;
				else return !this.state;
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
