 define([], function() {
	var storage = {
		init: function() {
			if(localStorage.getItem("subtaskDeeNA1") === null) {
				localStorage.setItem("subtaskDeeNA1", "false");
			};
			if(localStorage.getItem("subtaskDeeNA2") === null) {
				localStorage.setItem("subtaskDeeNA2", "false");
			};
		},
		setTrue: function(n) {
			if(n == 1) {
				localStorage.setItem("subtaskDeeNA1", "true");
			} else if(n == 2) {
				localStorage.setItem("subtaskDeeNA2", "true");
			}
			return n;
		},
		isTrue: function(n) {
			if(n == 1) {
				return (localStorage.getItem("subtaskDeeNA1") === "true");
			} else if(n == 2) {
				return (localStorage.getItem("subtaskDeeNA2") === "true");
			}
		}
	};
	return storage;
});