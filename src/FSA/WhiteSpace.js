//contains parsers or state machines for white space


var WhiteSpaceBefore = function() {
	this.final = false;
	this.index = 0;
	this.spaceChars = {
		" ":true, "\n":true, "\t":true
	}
	WhiteSpaceBefore.prototype.check = function(char) {
		if(this.final) return this.index;
		else if(char in this.spaceChars) {
			this.final = true;
			return this.index;
		}
		else {
			this.index++;
			return false;
		}
	};
};

exports.WhiteSpaceBefore = WhiteSpaceBefore;