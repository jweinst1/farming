/*
* Comment JavaScript Parser
* Written by Joshua Weinstein <jweinst1@berkeley.edu>
*
* Note: A parser to parse out the multiline and single line comments in javascript
*/


var JSCommentParser = (function(){
	//simple formatted error
	function commentError(char, expected) {
		throw new Error("Error: Expected = " + expected + " but got = " + char);
	} 

	var CommentState = {
		BASE:0,
		FSLASH:1,
		SLINE:2,
		MLINE:3,
		END_STAR:4
	};

	function JSCommentParser(){
		this.comments = [];
		this.state = CommentState.BASE;
		this.currentComment = [];
	};

	JSCommentParser.prototype.parse = function(string) {
		for (var i = 0; i < string.length; i++) {
			switch(this.state) {
				case CommentState.BASE:
					break;
				case CommentState.FSLASH:
					break;
				case CommentState.SLINE:
					break;
				case CommentState.MLINE:
					break;
				case CommentState.END_STAR:
					break;
			}
		}
	};
	return JSCommentParser;
})();