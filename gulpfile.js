const { src, dest, watch, series } = require("gulp")
const uglify = require("gulp-uglify")//压缩js
const rename = require("gulp-rename")//重命名
const less = require("gulp-less")//编译less
const minifyCss = require("gulp-minify-css")//压缩css
const imageMin = require("gulp-imagemin")//压缩图片
const webserver = require("gulp-webserver")
function jsTask() {
    return src("/js/**/*.js")//读取js文件,匹配js文件夹下的所有.js文件（任意层级）
        .pipe(uglify())//压缩js文件
        .pipe(rename({
            "suffix": ".min"
        }))
        .pipe(dest("./dist/js"))//输出到目录
}

function cssTask() {
    return src("/less/**/*.less")//读取js文件,匹配js文件夹下的所有.js文件（任意层级）
        .pipe(less())//编译less
        .pipe(minifyCss())//压缩
        .pipe(rename({
            "suffix": ".min"
        }))
        .pipe(dest("./dist/css"))//输出到目录
}
function imgTask() {
    return src("/images/**/*.{png,JPG,gif,ico}")//读取图片文件,匹配images文件夹下的所有图片文件（任意层级）
        .pipe(imageMin())//压缩
        .pipe(dest("./dist/images"))//输出到目录
}

function watchTask() {
    watch("/less/**/*.less", {
        "events": ["add", "change", "unlink"]
    }, cssTask)
}

function serve(cb) {
    src("/")
        .pipe(webserver({
            livereload: true,
            open: true,
            porr: 8080
        }))
    cb();
}


exports.jsTask = jsTask;//js可以在上线的时候执行一次压缩
exports.imgTask = imgTask;//图片可以在用的时候统一一次执行压缩

// exports.watchTask = watchTask;
// exports.serve = serve;
// exports.cssTask = cssTask;

exports.default = series(serve, watchTask)//开发就执行gulp命令




//图片可以在用的时候统一执行一次压缩
//js可以在上仙的时候执行一次压缩