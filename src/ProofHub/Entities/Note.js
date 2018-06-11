const BaseEntity = require('./BaseEntity');

const endpoint = '/api/v3/projects';
class Note extends BaseEntity {

    
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

    async save(){
        const axios = this.root.axios;
        const data = this.toJSON();
        if(this.id){ // update
            try {
                const res = await axios.put(endpoint+'/'+this.project.id+'/notebooks/'+this.notebook.id+'/notes/'+this.id, data);
                console.info(res.data);
            } catch(err) {
                console.error(err)
            }
        } else { // create
            try {
                const res = await axios.post(endpoint+'/'+this.project.id+'/notebooks/'+this.notebook.id+'/notes', data);
                console.info(res.data);
            } catch(err){
                console.error(err);
            }
        }
    }

    async delete(){
        const axios = this.root.axios;
        console.log("save");
        if(this.id){ // update
            const res = await axios.delete(endpoint+'/'+this.project.id+'/notebooks/'+this.notebook.id+'/notes/'+this.id);
            console.info(res.data);
        } else { // create
            console.error("Cant' delete a note without specifying it's ID")
        }
    }

    toJSON(){
        return {
            "title": this.title || "",
            "description":this.descr || "",
            "content":this.content || "",
            "private":this.isPrivate || "",
            "assigned":[]
        }
    }

    /// getters / setters
    setTitle(val){
        this.title = val;
        return this;
    }
    get title() {
        return this._title;
    }

    set title(val){
        this._title = val;
    }

    get descr() {
        return this._descr;
    }

    set descr(val){
        this._descr = val;
    }

    get content() {
        return this._content;
    }

    set content(val){
        this._content = val;
    }

    get isPrivate() {
        return this._isPrivate;
    }

    set isPrivate(val){
        this._isPrivate = val;
    }
}

module.exports = Note;