let inquirer = require('inquirer');
var chalk = require('chalk');

module.exports = function(app){

  let questions = [
    {
      type: 'input',
      name: 'email',
      message: chalk.blue(`Please enter your proofhub account email:`)
    },
    {
        type: 'input',
        name: 'token',
        message: chalk.blue(`Please enter your proofhub account token:`)
    },
    {
        type: 'input',
        name: 'url',
        message: chalk.blue(`Please enter your proofhub url without the https:// (ex 'mycompany.proofhub.com):`)
    },

  ];

  return inquirer.prompt(questions)
  .then((answers) => {
    return Object.assign(app, answers);
  })
}
