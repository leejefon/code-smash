var gulp = require('gulp');
var rjs = require('gulp-requirejs');
var uglify = require('gulp-uglify');
var webserver = require('gulp-webserver');

var paths = {
	assetsToWatch: [
		'src/**'
	],
	templates: [
		'src/**/*.html'
	]
};

gulp.task('uglifyJs', function () {
	rjs({
		baseUrl: "src",
		name: "CodeSmash",
		mainConfigFile: "src/CodeSmash.js",
		out: "codesmash.compiled.js"
	})
	.pipe(uglify())
	.pipe(gulp.dest('js'));
});

gulp.task('extractTemplates', function () {
	gulp.src(paths.templates)
		.pipe(gulp.dest('js/templates'));
});

gulp.task('webserver', function() {
	gulp.src('.')
		.pipe(webserver({
			livereload: true,
			directoryListing: true,
			open: true
		}));
});

gulp.task('watch', function () {
	gulp.watch(paths.assetsToWatch, ['uglifyJs', 'extractTemplates']);
});

// gulp.task('default', ['uglifyJs', 'extractTemplates', 'webserver', 'watch']);
gulp.task('default', ['uglifyJs', 'extractTemplates', 'watch']);
