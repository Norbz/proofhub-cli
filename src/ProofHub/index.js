const axios = require('axios');
const chalk = require('chalk')
require('dotenv').config()

const Project = require("./Entities/Project")



class ProofHub {

    /*
        Props :
            auth: {email, token}
            axios
    */

    constructor(){
        if(process.env.PH_API_EMAIL && process.env.PH_API_TOKEN && process.env.PH_API_BASE_URL){
            this.axios = axios.create({
                baseURL: process.env.PH_API_BASE_URL,
                timeout: 30000,
                headers: {
                    'X-API-KEY': process.env.PH_API_TOKEN,
                    'User-Agent': 'proofhub-cli ('+process.env.PH_API_EMAIL+')',
                    'Content-Type': 'application/json'
                }
              });
        } else {
            chalk.red("You need to be logged in before using the CLI. \nall the 'login' subcommand to log into your account, or see the documentation on Github if you want to be logged via environment variables")
        }
    }

    createProject(id=undefined){
        return new Project(this, id);
    }



    /// getters

    get root() {
        return this;
    }
}
 module.exports = ProofHub