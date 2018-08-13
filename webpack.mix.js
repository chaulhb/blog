let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
const glob = require('glob');

mix.js('resources/assets/js/app.js', 'public/js');
glob.sync("./resources/assets/js/pages/**/*.js").forEach((file) => {
    const start = file.indexOf('pages/');
    const end = file.lastIndexOf('/');
    const path = file.slice(start, end);
    if (path != '') {
        mix.js(file.replace(/.\//, ''), `public/js/${path}`);
    }
});

mix.sass('resources/assets/sass/app.scss', 'public/css');
glob.sync("./resources/assets/sass/pages/**/*.scss").forEach((file) => {
    const start = file.indexOf('pages/');
    const end = file.lastIndexOf('/');
    const path = file.slice(start, end);
    if (path != '') {
        mix.sass(file.replace(/.\//, ''), `public/css/${path}`);
    }
});
