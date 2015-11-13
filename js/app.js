requirejs.config({
	//By default load any module IDs from js/lib
	baseUrl: "js",
	//except, if the module ID starts with "app",
	//load it from the js/app directory. paths
	//config is relative to the baseUrl, and
	//never includes a ".js" extension since
	//the paths config could be for a directory.
	paths: {
		firebase: "../lib/bower_components/firebase/firebase",
		bootstrap: "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
		jquery: "../lib/bower_components/jquery/dist/jquery.min",
		hbs: "../lib/bower_components/require-handlebars-plugin/hbs",
		q: "..lib//bower_components/q/q"
	},
	shim: {
		"bootstrap": {
			deps: ["jquery"],
		},
		"firebase": {
           exports: 'Firebase'
        	}
	}
});

// Start the main app logic.
requirejs ( ["bootstrap","main"],
function (bootstrap,main) {
}); // END REQUIREJS