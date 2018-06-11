const BaseEntity = require('./BaseEntity');
const Note = require('../Entities/Note');

const endpoint = '/api/v3/projects/';
class Notebook extends BaseEntity {

    createNote(id = undefined) {
        if(this.id){
            return new Note(this, id);
        } else {
            throw new Error("Must provide a Notebook ID before creating a Note")
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

    get notebook() {
        return this;
    }
}

module.exports = Notebook;