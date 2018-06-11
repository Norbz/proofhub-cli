'use strict';
const fs = require('fs');
let prompt = require('./prompt');
var chalk = require('chalk');

module.exports = {

  command: 'login',
  aliases: ['lg'],
  describe: 'Login to the ProofHub API using your mail and token',

  handler: (argv) => {
    chalk.green("This commands 'logs' you into Proofhub API by writing a .env file with the given values.");
    chalk.green("This command will erase the preference everytime it is called !");
    chalk.red("This might not work when using the library programmatically as a API Wrapper (highly experimental)")
    let {
        email,
        token,
        url
    } = argv;

    console.log(
        `Login into ProofHub`
      );

    let app = {
      email,
      token,
      url
    }

    prompt(app).then((result) => {
      const out = "PH_API_EMAIL="+result.email
      +"\nPH_API_TOKEN="+result.token
      +"\nPH_API_BASE_URL=https://"+result.url

      fs.writeFileSync(process.cwd()+'/.env', out);
    });

  }
};
