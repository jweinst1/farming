//general match object for exact string


var SeqMatch = (function(){
	function SeqMatch(seq) {
		this.seq = seq;
		this.index = 0;
		this.state = 'off';
	}

	SeqMatch.prototype.input = function(char) {
		switch(this.state) {
			case 'off':
				if(this.seq[this.index] == char) {
					this.state = 'on';
					this.index++;
					return {
						status:'on'
					};
				}
				else return {
					status:'off'
				};
				break;
			case 'on':
				if(this.seq[this.index] == char) {
					if((++this.index) == this.seq.length) {
						this.state = 'done';
						return {
							status:'done'
						};
					}
					else return {
						status:'on'
					};
				}
				else {
					this.state = 'off';
					this.index = 0;
					return {
						staus:'off'
					}
				}
				break;
			case 'done':
				return {
					status:'done'
				};
				break;
		}
	};

	SeqMatch.prototype.reset = function() {
		this.index = 0;
		this.state = 'off';
	};
	return SeqMatch;
})();

exports.SeqMatch = SeqMatch;