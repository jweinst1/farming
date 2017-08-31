//unit testing functions

exports.assertEqual = function(result, expected, name) {
	if (result == expected){
		console.log("Test: " + name + " passed");
	} else {
		console.log("Test: " + name + " failed, result = " + result + " expected = " + expected);
	}
};

exports.assertRegexMatch = function(result, regex, name) {
	if (regex.test(result)){
		console.log("Test: " + name + " passed");
	} else {
		console.log("Test: " + name + " failed, result = " + result);
	}	
};