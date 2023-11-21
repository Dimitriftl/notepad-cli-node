const fs = require('fs').promises;
const path = process.env.DATA_PATH;

async function appendNoteToFile(title, desc) {
    try {
        console.log('apped')
        const data = await fs.readFile(path);
        const json = JSON.parse(data);
        json.push({ title: title, desc: desc ?? "" })

        await fs.writeFile(path, JSON.stringify(json));
        console.log('The "data to append" was appended to file!');
    } catch (err) {
        console.error('Error:', err);
    }
}

module.exports = { appendNoteToFile };