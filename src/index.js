const ProofHub = require('./ProofHub')

let chalk = require('chalk');

class App {

  constructor(argv){
    // debug function
    console.log(
      chalk.green(`\nLoading application logic...\n`) +
      chalk.grey(
      `Dumping argv:\n` +
      `${JSON.stringify(argv)}`
    ));
    // *******


   

    this.ph = new ProofHub();

  }

  async process(argv){
    const ph = this.ph;

    switch(argv._){
      // Project
      case "project:all":
        await ph.createProject().fetchAll();
        break;

        // File
      case "file:upload":
        await ph.createProject(argv.project)
                .createFolder(argv.folder)
                .createFile()
                .upload(argv.filename);
        break;
    }
  }
}

module.exports = App;
