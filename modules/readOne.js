const yargs = require('yargs');
const fs = require('fs').promises;
const path = process.env.DATA_PATH;

const readOne = async (title) => {
    try {
        const data = await fs.readFile(path);
        const json = JSON.parse(data);
        const note = json.find(note => note.title === title);
        if (!note) {
            console.log("Note not found");
            return;
        }
        console.log(note);

       
    } catch (error) { 
        console.error("Error", error)
    }
} 

module.exports = { readOne };