'use strict';

let prompt = require('./prompt');

module.exports = {

  command: 'login',
  aliases: ['lg'],
  describe: 'Login to the ProofHub API using your mail and token',

  handler: (argv) => {
    let {
        email,
        token
    } = argv;

    console.log(
        `Login into ProofHub`
      );

    let app = {
      email,
      token
    }

    prompt(app).then((result) => {
      console.log(
        `You have selected...\n` +
        `Delete?: ${result.email} \n` +
        `Deleting file '${result.token}'...`
      );
    });

  }
};
