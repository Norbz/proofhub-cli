/**
 * This file intialize your CLI and load the commands
 */

'use strict';

/**
 * Load the yargs instance
 * @link https://github.com/yargs/yargs
 */
let yargs = require('yargs');

/**
 * commandDir will enable loading each command as module from a given directory
 * @link https://github.com/yargs/yargs#commanddirdirectory-opts
 */
yargs.commandDir(
  './commands', // path for loading commands
  {
    recurse: true,
    exclude: /prompt\.js$/
  }
);

/**
 * Set the default options like -version, -help etc.
 */
require('./yargs-config')(yargs);

// Pass the argv to yargs intsance
let argv = yargs.argv;

/**
 * Pass the user input to applicatin except when 'ogin' command is executed
 * login is using prompt which is async, so it should load application after
 * the prompt promize is resolved
 */
if(!argv._.includes('login') && !argv._.includes('lg')){
  let App = require('../src/index');
  const app = new App(argv);
  app.process(argv);
}
