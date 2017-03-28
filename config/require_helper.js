var scripts = [
  {
    file: 'js/lib/jslegacy.js',
    exports: ['BarLegacy']
  }
];

var fs = require('fs');

for (var i = 0; i < scripts.length; i++) {
  var src = fs.readFileSync(scripts[i].file, 'utf8');
  eval(src);
  for (var j = 0; j < scripts[i].exports.length; j++) {
    var name = scripts[i].exports[j];
    eval('global.' + name + ' = ' + name);
  }
}
