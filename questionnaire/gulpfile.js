var gulp         = require('gulp'),
	browserSync  = require('browser-sync'),
	sass         = require('gulp-sass'),
	del          = require('del'),
	concat       = require('gulp-concat'),
	uglify       = require('gulp-uglify-es').default,
	cleancss     = require('gulp-clean-css'),
	cache        = require('gulp-cache'),
	imagemin     = require('gulp-imagemin'),
	spritesmith  = require('gulp.spritesmith'),
	fileinclude  = require('gulp-file-include'),
	notify       = require('gulp-notify'),
	rsync        = require('gulp-rsync'),
	newer        = require('gulp-newer'),
	rename       = require('gulp-rename'),
	autoprefixer = require('gulp-autoprefixer'),
	project_name = 'questionnaire';

// Local Server
gulp.task('browser-sync', function(done) {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false,
		// open: false,
		// online: false, // Work Offline Without Internet Connection
		// tunnel: true,
		// tunnel: "projectname", // Demonstration page: http://projectname.localtunnel.me
	})
	done();
});
gulp.task('reload', function(done){
    browserSync.reload();
    done();
});

// Custom Styles
gulp.task('styles', function(done) {
	return gulp.src('app/sass/**/*.sass')
	.pipe(sass({ outputStyle: 'expanded' }).on("error", notify.onError()))
	.pipe(autoprefixer(['last 15 versions'], { cascade: true }))
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.stream());
	done();
});

gulp.task('clean', function (done) {
  del('dist/');
  done();
});

gulp.task('sprite', function (done) {
	var spriteData = gulp.src('./app/images/sprites/*.*')
		.pipe(spritesmith({
			imgName: 'sprite.png',
			cssName: '_sprite.sass',
			imgPath: '../images/sprite.png'
	}));
	spriteData.img.pipe(gulp.dest('./app/images/'));
	spriteData.css.pipe(gulp.dest('./app/sass/'));
	done();
});

gulp.task('img', function(done) {
	return gulp.src('app/images/**/*')
	.pipe(imagemin([
	    imagemin.jpegtran({progressive: true}),
	    imagemin.optipng({optimizationLevel: 5}),
	    imagemin.svgo({
	        plugins: [
	            {removeViewBox: true},
	            {cleanupIDs: false}
	        ]
	    })
	]))
	.pipe(gulp.dest('app/images/'))
	.pipe(browserSync.reload({ stream: true }));
	done();
});

gulp.task('include', function(done) {
  return gulp.src('app/html/*.html')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('app'))
    .pipe(browserSync.reload({ stream: true }));
    done();
});

// Deploy
gulp.task('rsync', function() {
	return gulp.src('app/')
	.pipe(rsync({
		root: 'app/',
		hostname: 'f0100934@rocketrs.ru',
		destination: 'domains/rocketrs.ru/public_html/' + project_name + '/',
		// include: ['*.htaccess'], // Included files
		exclude: ['**/Thumbs.db', '**/*.DS_Store'], // Excluded files
		recursive: true,
		archive: true,
		silent: false,
		compress: true
	}))
});

gulp.task('watch', function(done) {
	gulp.watch('app/sass/**/*.sass', gulp.series('styles'));
	gulp.watch('app/libs/**/*.css', gulp.parallel('reload'));
	gulp.watch('app/libs/**/*.js', gulp.parallel('reload'));
	gulp.watch('app/js/**/*.js', gulp.parallel('reload'));
	gulp.watch('app/html/**/*.html', gulp.series('include'));
	gulp.watch('app/*.html', gulp.parallel('reload'));
	gulp.watch('app/images/sprites/**/*.png', gulp.series('sprite', 'reload'));
	done();
});

gulp.task('default', gulp.parallel('styles', 'sprite', 'include', 'browser-sync', 'watch'));

gulp.task('build', gulp.series('clean', 'styles', 'img', 'sprite', 'include', function(done) {

	var buildCss = gulp.src([
		'app/css/*.css'
	])
	.pipe(gulp.dest('dist/css'));

	var buildJs = gulp.src('app/images/**/*')
		.pipe(gulp.dest('dist/images'));

	var spriteData = gulp.src('./app/images/sprites/*.*')
		.pipe(spritesmith({
			imgName: 'sprite.png',
			cssName: 'sprite.css',
			imgPath: '../images/sprite.png'
	}));
	spriteData.img.pipe(gulp.dest('./dist/images/'));
	spriteData.css.pipe(gulp.dest('./dist/css/'));

	var buildFonts = gulp.src('app/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'));

	var buildJs = gulp.src('app/js/**/*')
		.pipe(gulp.dest('dist/js'));

	var buildLibs = gulp.src('app/libs/**/*')
		.pipe(gulp.dest('dist/libs'));

	var buildHtml = gulp.src('app/*.html')
		.pipe(gulp.dest('dist'));

	var buildHtml = gulp.src('app/*.php')
		.pipe(gulp.dest('dist'));
	done();
}));