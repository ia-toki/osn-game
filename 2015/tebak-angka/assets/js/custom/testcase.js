define([], function() {
	var tc = [];
	tc[1] = [8, 3, 6];
	tc[2] = [64, 6, 61];
	var header = ["", ".1.....", "..2...."];
	var testcase = {
		init: function() {
			tc[1] = [8, 3, 6];
			tc[2] = [64, 6, 61];
			header = ["", ".1.....", "..2...."];
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
			return "0 " + tc[numTC][2] + "\\n";
		},
		getTrueAnswer: function(numTC) {
			return tc[numTC][2];
		},
	};

	return testcase;
});