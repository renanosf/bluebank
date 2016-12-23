var gulp = require("gulp");

gulp.task("build", () => {
	gulp.src([
		//"node_modules/@angular/**/*",
		//"node_modules/rxjs/**/*",
		//"node_modules/core-js/client/shim.min.js",
		//"node_modules/zone.js/dist/zone.js",
		//"node_modules/reflect-metadata/Reflect.js",
		//"node_modules/systemjs/dist/system.src.js",
		"app/**/*",
		"index.html",
		"systemjs.config.js",
		"styles.css"
	], {base:"."})
	.pipe(gulp.dest("../back/static"));
});

// watch files for changes and reload
gulp.task('serve', () => {
    gulp.watch([
    	"app/**/*.js",
		"index.html",
		"systemjs.config.js",
		"styles.css"
	], ['build']);
});