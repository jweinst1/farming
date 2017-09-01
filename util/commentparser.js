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
	}

	JSCommentParser.prototype.parse = function(string) {
		for (var i = 0; i < string.length; i++) {
			switch(this.state) {
				case CommentState.BASE:
					if(string[i] === '/') this.state = CommentState.FSLASH;
					break;
				case CommentState.FSLASH:
					if(string[i] === '*') this.state = CommentState.MLINE;
					else if(string[i] === '/') this.state = CommentState.SLINE;
					else {
						//resets if not actual comment init
						this.state = CommentState.BASE;
					}
					break;
				case CommentState.SLINE:
					if(string[i] === '\n') {
						this.state = CommentState.BASE;
						this.comments.push(this.currentComment.join("")); //ends current comment and pushes to bin
						this.currentComment = []; //resets current comment
					}
					else this.currentComment.push(string[i]);
					break;
				case CommentState.MLINE:
					if(string[i] === '*') this.state = CommentState.END_STAR;
					else this.currentComment.push(string[i]);
					break;
				case CommentState.END_STAR:
					if(string[i] === '/') {
						this.state = CommentState.BASE;
						this.comments.push(this.currentComment.join(""));
						this.currentComment = [];
					}
					else this.currentComment.push('*' + string[i]); //if mutli-line comment does not terminate, puts star as part of comment.
					break;
			}
		}
		//cleanup 
		if(this.currentComment.length) this.comments.push(this.currentComment.join(""));
		this.currentComment = [];
		this.state = CommentState.BASE;
	};

	JSCommentParser.prototype.getComments = function() {
		return this.comments;
	};

	JSCommentParser.prototype.clearComments = function() {
		this.comments = [];
	};	
	return JSCommentParser;
})();

