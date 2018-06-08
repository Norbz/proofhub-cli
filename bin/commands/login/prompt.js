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
      }
  ];

  return inquirer.prompt(questions)
  .then((answers) => {
    console.log(
      `Answers received:\n` +
      `Mail: ${answers.email} \n`+
      `token: ${answers.token} \n`
    );
    return Object.assign(app, answers);
  })
}
