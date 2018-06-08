class BaseEntity {

    constructor(parent, id){
        this.parent = parent;
        this.id = id;
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
}

module.exports = BaseEntity;