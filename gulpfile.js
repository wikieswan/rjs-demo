var gulp = require('gulp')
var exec = require('child_process').exec;

gulp.task('rjsBuild', function(cb) {
    exec('node r.js -o build.js', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
    
});

gulp.task('default', ['rjsBuild']);