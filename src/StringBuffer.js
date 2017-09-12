//String Buffer object used for collecting chars and writing new strings

exports.StringBuffer = function() {
	this.buf = [];
	this.append = function(string) {
		this.buf.push(string);
	};

	this.makeString = function() {
		return this.buf.join("");
	};

	//concats two string buffers
	this.conCat = function(sBuf) {
		this.buf = this.buf.concat(sBuf.buf);
	};
};
