const {src, dest, watch, series, parallel} = require('gulp');


//Плагины
const fileInclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const size = require('gulp-size');

// обработка html
const html = () => {
   return  src('./src/*.html')
.pipe(fileInclude())
       .pipe(size({title: 'До сжатия'}))
.pipe(htmlmin({
   collapseWhitespace:true
}))
       .pipe(size({title: 'После сжатия'}))
.pipe(dest('./public'));

}

//Наблюдение
const watcher =() => {
   watch('./src/html/**/*.html', html);
};

//задачи
exports.html = html;
exports.watch = watcher;

// Сборка
exports.dev = series(
    html,
    watcher()
);