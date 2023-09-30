const path = require('path');
const moduleAlias = require('module-alias');

moduleAlias.addAliases({
  '@validation': '../validator',
  '@errors': '../errors',
  '@service': '../service',
  '@controller': '../controller',
  '@constants': '../constants',
});

module.exports = moduleAlias;
