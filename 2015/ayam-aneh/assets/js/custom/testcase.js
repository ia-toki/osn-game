define([], function() {
	var tc = [];
	tc[1] = [10, 10, "BBBCAAAAAA"];
	tc[2] = [10, 350, "JJMQQQBFLL"];
	var header = ["", ".1....", "..2..."];
	var testcase = {
		init: function() {
			tc[1] = [10, 10, "BBBCAAAAAA"];
			tc[2] = [10, 350, "JJMQQQBFLL"];
			header = ["", ".1....", "..2..."];
		},
		getHeader: function(numTC) {
			return header[numTC];
		},
		getNVariable: function(numTC) {
			return tc[numTC][0];
		},
		getKVariable: function(numTC) {
			return tc[numTC][1];
		},
		getAnswer: function(numTC) {
			return "JAWAB " + tc[numTC][2] + "\\n";
		},
		getTrueAnswer: function(numTC) {
			return tc[numTC][2];
		},
	};

	return testcase;
});