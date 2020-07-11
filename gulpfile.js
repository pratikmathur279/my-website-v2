const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const imageResize = require('gulp-image-resize');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const connect = require('gulp-connect-php');
const browserSync = require('browser-sync');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const browserify = require('browserify');
const source =  require('vinyl-source-stream');
const babelify = require('babelify');
const buffer = require('vinyl-buffer');

var config = {
    sassPath: './resources/sass',
    componentsPath: './resources/javascript/marketing',
    jsDist: './public/javascript/',
    cssDist: './public/css/'
};

gulp.task('imagemin', ()=> {
    return gulp.src('./resources/images/*.png')
	.pipe(imagemin({
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		use: [pngquant()]
	}))
	.pipe(gulp.dest('public/images/'));
});

gulp.task('connect', () => {
    browserSync({
        port: 3456,
        proxy: 'portal.test'
    });
});

//import style sheet partials into app.scss.
gulp.task('mainStyles', () => {
   gulp.src(config.sassPath+'/app.scss')
       .pipe(sourcemaps.init())
       .pipe(sass({outputStyle: "compressed"}).on('error', sass.logError))
       .pipe(sourcemaps.write())
       .pipe(gulp.dest(config.cssDist))
       .pipe(browserSync.stream());  
});

//watch sass files for changes
gulp.task('watch:sass', ['connect'], () => {
   gulp.watch(config.sassPath+'/*.scss', ['mainStyles']);    
});

gulp.task('react', ()=> {
    browserify(config.marketingPath+'/main.js')
    .transform('babelify', {presets: ["es2015", "react"]})
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('portal.js'))
    .pipe(buffer())
    .pipe(gulp.dest(config.jsDist));
});

gulp.task('watch:react', () => {
   gulp.watch(config.marketingPath+"/**/*", ['react']);
});

gulp.task('default', ['connect', 'watch:react', 'watch:sass']);