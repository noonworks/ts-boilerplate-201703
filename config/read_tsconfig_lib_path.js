var tsconfig = require('../tsconfig.json');
var pathes = tsconfig['compilerOptions']['paths']['*'];
var outdir = tsconfig['compilerOptions']['outDir'];
var libPathes = [];
var nodePathes = [];
if (pathes !== undefined) {
  for (var i = 0; i < pathes.length; i++) {
    var p = pathes[i].replace(/\*$/g, '');
    if (p.length > 0) {
      libPathes.push(p);
      nodePathes.push(p.replace(/^ts\//, outdir + '/').replace(/\/$/, ''));
    }
  }
}

if (process.platform === 'win32') {
  exports.NODE_PATH = nodePathes.join(';');
} else {
  exports.NODE_PATH = nodePathes.join(':');
}

exports.pathes = libPathes;
