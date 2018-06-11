'use strict';

module.exports = {

  command: 'note:create',
  aliases: ['nt:c'],
  describe: 'Create a note in the given project and notebook',
  usage:'note:create <project> <notebook> [options]',

  builder: {
    project: {
      alias: 'p',
      describe: 'The project ID in wich to create the note',
      demandOption: true
    },
    notebook: {
      alias: 'n',
      describe: 'The notebook ID in which to create the note',
      demandOption: true
    },
    title: {
      alias: 't',
      describe: 'Set the title of the created note',
      demandOption: true
    },
    content: {
        alias: 'c',
        describe: 'Set the content of the created note',
      }
  },

  handler: (argv) => {
    argv._ = 'note:create';
  }
};
