//constant macro object

var ConstMacro = function(pattern, replacement) {
	this.pattern = pattern;
	this.replace = replacement;

	ConstMacro.prototype.match = function(string) {
		var matchState = false;
		var index = 0;
		for (var i = 0; i < string.length; i++) {
			if(matchState) {
				if(this.pattern[++index] == string[i]) {
					if(index == string.length) return true;
				}
				else return false;
			}
			else if(this.pattern[index] == string[i]) {
				matchState = true;
				index++;
			}

		}
		return false;
	};
};

exports.ConstMacro = ConstMacro;