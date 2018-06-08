const BaseEntity = require('./BaseEntity');
const File = require('../Entities/File');

const endpoint = '/api/v3/projects/';
class Project extends BaseEntity {

    createFile(id = undefined) {
        if(this.id){
            return new File(this, this, id);
        } else {
            throw new Error("Must provide an ID before creating a file")
        }
    }

    async fetch() {
        if(this.id){
            const res = await this.root.axios.get(endpoint+'/'+this.project.id+'/folders/'+this.id);
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

    get folder(){
        return this;
    }
}

module.exports = Project;