// Requires luminosity 

var colorutil = require('./colorutil')

var r = process.argv[2];
var g = process.argv[3];
var b = process.argv[4];

var luminosity = colorutil.luminosity(r, g, b)

console.log(luminosity)