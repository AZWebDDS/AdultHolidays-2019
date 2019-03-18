// Переменные
// -----------------------------
var gulp = require('gulp'), // Подключаем Gulp
    browserSync = require('browser-sync').create(); // Подключаем Browser Sync (https://browsersync.io/docs/gulp)


// Пути для файлов php и html (используются в browserSync)
var paths = {
    php: ['public/**/*.php'],
    html: ['public/**/*.html'],
    css: ['public/**/*.css']
};


// Переменные для отдельных функций
var reload = browserSync.reload;


// Выполняемые задачи (таски)
// -----------------------------

// Таск наблюдения за файлами и обновления браузера browser-sync
gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "localhost:8080"
    });

    gulp.watch(paths.html).on('change', reload);
    gulp.watch(paths.php).on('change', reload);
});

// Задачи, которые выполняются по умолчанию (на команду $> gulp)
gulp.task('default', gulp.parallel('browser-sync'));


// ==========================
// Пробная задача (проверка работоспособности gulp)
gulp.task('mytask', function() {
    console.log('Привет, я таск!');
});
