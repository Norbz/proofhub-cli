'use strict';

module.exports = {

  command: 'note <project>',
  aliases: ['nt'],
  describe: 'All notes for a given project and notebook',

  builder: {
    book: {
      alias: 'b',
      describe: 'Rstrict the display of the note inside a given Notebook ID',
    }
  },

  handler: (argv) => {
    let {all, dots, size} = argv;

    console.log(
      `Running command ls ... \n` +
      `-a = ${all}\n` +
      `-t = ${dots}\n` +
      `-s = ${size}`
    );
  }
};
