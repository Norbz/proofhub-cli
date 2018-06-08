'use strict';

module.exports = {

  command: 'file:upload <filename>',
  aliases: ['f:up'],
  describe: 'Upload a file to a Project',

  builder: {
    project: {
        alias: 'p',
        describe: 'Project ID',
        demandOption: true
    },
    folder: {
        alias: 'f',
        describe: 'Folder ID',
        demandOption: true
    },
  },

  handler: (argv) => {
      argv._ = "file:upload"
  }
};
