#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2));
greet = require("greet")
//console.log(argv["drunk"])
console.log(greet(argv._[0], argv["drunk"]))