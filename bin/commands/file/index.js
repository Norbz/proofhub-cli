'use strict';

module.exports = {

  command: 'file <project>',
  aliases: ['f'],
  describe: 'List all file in a given project',

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
