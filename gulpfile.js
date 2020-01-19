const {src, dest, watch, parallel} = require('gulp');

const sass = require('gulp-sass');

function sass2css(done){
    src("./stylesheets/src/app.scss")
    .pipe(sass({
        outputStyle: "compressed"
    }).on('error', sass.logError))
    .pipe(dest("./stylesheets/dist/css/"));
    done();
}

watch("./stylesheets/src/**/*.scss", sass2css);

module.exports.default = parallel(sass2css);