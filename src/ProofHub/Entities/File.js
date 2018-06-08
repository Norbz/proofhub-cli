const fs = require('fs');
const FormData = require('form-data');

const BaseEntity = require('./BaseEntity');

class File extends BaseEntity {

    async upload(filename) {
        const axios = this.root.axios;
        const stream = fs.createReadStream(filename);
        const form = new FormData();

        form.append("file", stream,  {filename: filename.split("/").pop()})
        form.append("project", this.project.id);

        let res = await axios.post("/files/upload.php", form, {headers:form.getHeaders()})
        console.log(res.data)
        if(res.data.success){
            
            res = await axios.post(
                '/api/v3/projects/'+this.project.id+'/folders/'+this.folder.id+'/files',
                {
                    folder: this.folder.id,
                    "attachments":[res.data.file_id]
                }
            );

            console.info(res.data);
        }
    }
}

module.exports = File