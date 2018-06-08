'use strict';

module.exports = {

  command: 'upload',
  aliases: ['up'],
  describe: 'Upload a file to the given project',

  builder: {
    proj: {
      alias: 'p',
      describe: 'Display all files',
      demandOption: true
    }
  },

  handler: (argv) => {
    let {proj} = argv;

    console.log(
      `Running command upload ... \n` +
      `-p = ${proj}\n`
    );
  }
};
