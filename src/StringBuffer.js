//String Buffer object used for collecting chars and writing new strings

exports.StringBuffer = function() {
	this.buf = [];
	StringBuffer.prototype.append = function(string) {
		this.buf.push(string);
	};

	StringBuffer.prototype.makeString = function() {
		return this.buf.join("");
	};

	//concats two string buffers
	StringBuffer.prototype.conCat = function(sBuf) {
		this.buf = this.buf.concat(sBuf.buf);
	};
};

