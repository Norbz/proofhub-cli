'use strict';

module.exports = {

  command: 'project:all',
  aliases: ['p:a'],
  describe: 'Get All projects',

  builder: {
    
  },

  handler: (argv) => {
      argv._ = "project:all"
  }
};
