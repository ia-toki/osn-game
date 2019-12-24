 define([], function() {
	var storage = {
		init: function() {
			localStorage.setItem("18042893821", "false");
			localStorage.setItem("18042893822", "false");
			localStorage.setItem("18042893823", "false");
			localStorage.setItem("18042893824", "false");
			localStorage.setItem("18042893825", "false");
			localStorage.setItem("18042893826", "false");
			localStorage.setItem("18042893827", "false");
			localStorage.setItem("18042893828", "false");
			localStorage.setItem("18042893829", "false");
			localStorage.setItem("18042893830", "false");
			localStorage.setItem("18042893832", "false");
			localStorage.setItem("18042893833", "false");
			localStorage.setItem("18042893834", "false");
			localStorage.setItem("18042893836", "false");

			if(localStorage.getItem("18042893831") === null) {
				localStorage.setItem("18042893831", "false");
			};
			if(localStorage.getItem("18042893835") === null) {
				localStorage.setItem("18042893835", "false");
			};
		},
		setTrue: function(n) {
			if(n == 1) {
				localStorage.setItem("18042893831", "true");
			} else if(n == 2) {
				localStorage.setItem("18042893835", "true");
			}
			return n;
		},
		isTrue: function(n) {
			if(n == 1) {
				return (localStorage.getItem("18042893831") === "true");
			} else if(n == 2) {
				return (localStorage.getItem("18042893835") === "true");
			}
		}
	};
	return storage;
});