var gulp = require('gulp'), // well, duh
	jade = require('gulp-jade'), // jade -> html
	pug = require('gulp-pug'),
	sass = require('gulp-sass'), // sass -> css
	autoprefixer = require('gulp-autoprefixer'), // add vendor prefixes
	uncss = require('gulp-uncss'), // remove unused css classes
	browserSync = require('browser-sync'); // fire up a local server

// spin up a browsersync server
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './dist/'
    },
    injectChanges: true
  })
});
//Convert .jade to .html file
gulp.task('jade', function(){
	gulp.src('src/*.jade')
	.pipe(jade({
		pretty: true
	}))
	.pipe(gulp.dest('dist/'));
});
gulp.task("copy_all", function(){
	gulp.src('src/*').pipe(gulp.dest('dist/'));
});

//Convert .scss file to .css + autoprefix
gulp.task('sass', function(){
	return gulp.src('src/css/main.scss')
	.pipe(sass())
	.pipe(autoprefixer({
		browsers: ['last 3 versions'],
	}))
	.pipe(gulp.dest('dist/css/'));
});
gulp.task('uncss', function () {
    return gulp.src('dist/css/**/*.css')
        .pipe(uncss({
        	ignore: [
        			// add classes to ignore using regular expressions
        			],
            html: ['dist/**/*.html', 'dist/**/*.js'],

        }))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('copy_js', function(){
	gulp.src('src/js/*.js').pipe(gulp.dest('dist/js/'))
});

gulp.task('copy_img', function(){
	gulp.src('src/img/**/*').pipe(gulp.dest('dist/img/'))
});

gulp.task('copy_fonts', function(){
	gulp.src('src/fonts/*').pipe(gulp.dest('dist/fonts/'))
});

//Sass watcher
gulp.task('watch',['browserSync', 'copy_fonts', 'copy_img', 'copy_js', 'sass', 'jade'], function(){
	gulp.watch('src/css/**/*.scss', ['sass']);
	gulp.watch('src/**/*.jade', ['jade']);
	gulp.watch('src/js/*.js', ['copy_js']);
	gulp.watch('src/img/', ['copy_img']);
	gulp.watch('src/fonts/', ['copy_fonts']);
	gulp.watch('dist/*.html', browserSync.reload);
    gulp.watch('dist/**/*.css', browserSync.reload);
    gulp.watch('dist/**/*.js', browserSync.reload);
});