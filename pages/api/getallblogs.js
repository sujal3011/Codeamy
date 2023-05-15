import * as fs from 'fs'

export default async function handler(req, res) {

    let files=await fs.promises.readdir('blog_data');  //reading the folder
    let myFiles=[];
    for(const file of files){
        
        const myfile=await fs.promises.readFile('blog_data/' + file,{ encoding: 'utf8' });  //reading the individual files of the folder
        myFiles.push(JSON.parse(myfile));
    }

    res.status(200).json(myFiles);
}