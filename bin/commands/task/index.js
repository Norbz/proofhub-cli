'use strict';

module.exports = {

  command: 'task',
  describe: 'Get assigned tasks',

  handler: (argv) => {
    let {dir, otherDirs} = argv;

    console.log(
      `Running command mkdir ... \n` +
      `Arguments received: \n` +
      `dir: ${dir} \n` +
      `otherDirs: ${otherDirs}`
    );
  }
};
