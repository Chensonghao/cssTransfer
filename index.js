var cleanCSS = require('clean-css');
var fs = require('fs');
function cssMinifier(flieIn, fileOut) {
    var flieIn = Array.isArray(flieIn) ? flieIn : [flieIn];
    var finalCode = '';
    for (var i = 0; i < flieIn.length; i++) {
        var origCode = fs.readFileSync(flieIn[i], 'utf8');
        finalCode += new cleanCSS().minify(origCode).styles;
    }
    finalCode = finalCode.replace(/\\/g,'\\\\');
    finalCode = finalCode.replace(/"/g,'\\"');
    fs.writeFileSync(fileOut, 'module.exports="'+finalCode+'";', 'utf8');
}
module.exports = cssMinifier;
