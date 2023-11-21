const yargs = require('yargs');
const fs = require('fs').promises;
const path = process.env.DATA_PATH;


 const removeNote = async (title) => {
    try {
        const data = await fs.readFile(path);
        const json = JSON.parse(data);
        console.log(title, "title");
        const newJson = json.filter((note) => note.title !== title);


        await fs.writeFile(path, JSON.stringify(newJson));
        console.log('The "data to remove" was removed from the file!');
    } catch (error) { 
        console.error("Error", error)
    }
} 

module.exports = { removeNote };