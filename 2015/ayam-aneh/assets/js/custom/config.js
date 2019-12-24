require.config({
	paths: {
		'jquery': '../vendor/jquery',
		'bootstrap': '../vendor/bootstrap.min',
		'bootstrap-dialog': '../vendor/bootstrap-dialog.min',
	},
	shim: {
		'jquery': {
			exports: '$',
		},
        'bootstrap': {
            deps: ["jquery"]
        },
        'bootstrap-dialog': {
            deps: ["jquery", "bootstrap"],
            exports: 'BootstrapDialog',
        }
	}
});

require(['main']);