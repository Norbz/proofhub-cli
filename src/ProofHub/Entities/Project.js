const BaseEntity = require('./BaseEntity');
const Folder = require('./Folder');

const endpoint = '/api/v3/projects';
class Project extends BaseEntity {

    /*
        Props :
            ph: ProofHub
            id: String
    */

    createFolder(id = undefined) {
        if(this.id){
            return new Folder(this, id);
        } else {
            throw new Error("Must provide an ID before creating a file")
        }
    }

    async fetch() {
        if(this.id){
            const res = await this.root.axios.get(endpoint+'/'+this.id);
            console.info(res.data);
        } else {
            throw new Error("Must provide an ID before fetching a specific project")
        }
    }

    async fetchAll() {
        const res = await this.root.axios.get(endpoint);
        console.info(res.data);
    }

    /// getters

    get project(){
        return this;
    }
}

module.exports = Project;