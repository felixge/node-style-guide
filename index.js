'use strict';

var readFile = require('fs').readFileSync;
var pathJoin = require('path').join;

module.exports = {
  eslintrc: loadJson('.eslintrc'),
  jshintrc: loadJson('.jshintrc')
};

function loadJson(configFile) {
  var data = readFile(pathJoin(__dirname, configFile), 'utf-8');
  return JSON.parse(data);
}
