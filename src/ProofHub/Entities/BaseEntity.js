class BaseEntity {

    constructor(parent, id){
        this.parent = parent;
        this.id = id;
    }

    get endpoint() {
        return '/api/v3';
    }

    get root() {
        if(this.parent){
            return this.parent.root;
        }
        return null;
    }

    get project() {
        if(this.parent){
            return this.parent.project;
        }
        return null
    }

    get folder() {
        if(this.parent){
            return this.parent.folder;
        }

        return null
    }

    get notebook() {
        if(this.parent){
            return this.parent.notebook;
        }

        return null
    }
}

module.exports = BaseEntity;