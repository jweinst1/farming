//id matcher objects




//Matches @define keyword
var MatchDefine = function() {
	this.chars = "@define"
	this.length = this.chars.length;
	this.state = -1;
	this.matching = false;

	//method that determines if matching is entirely done and true
	MatchDefine.prototype.isMatched = function() {
		return this.state === this.length && this.matching;
	};
};