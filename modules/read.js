const yargs = require('yargs');
const fs = require('fs').promises;
const path = process.env.DATA_PATH;

const read = async () => {
    try {
        const data = await fs.readFile(path);
        const json = JSON.parse(data);
        console.log(json);

       
    } catch (error) { 
        console.error("Error", error)
    }
} 

module.exports = { read };