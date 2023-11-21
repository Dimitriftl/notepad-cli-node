require("dotenv").config();
const yargs = require("yargs");
const add = require("./modules/add.js");
const remove = require("./modules/remove.js");
const read = require("./modules/read.js");
const readOne = require("./modules/readOne.js");

yargs.command({
  command: "add",
  describe: "add a note",
  handler(args) {
    const { title, desc } = args;
    add.appendNoteToFile(title, desc);
  },
  builder: {
    title: {
      demandOption: true,
      type: "string",
      describe: "title",
    },
    desc: {
      demandOption: false,
      type: "string",
      describe: "title",
    },
  },
});

yargs.command({
  command: "remove",
  describe: "remove one",
  handler(args) {
    const { title } = args;
    console.log(args, "args");
    remove.removeNote(title);
  },
  // mettre un builder avec un title sinon le title est undefined à l'exe de la function
  builder: {
    title: {
      demandOption: true,
      type: "string",
      describe: "title",
    },
  },
});

yargs.command({
  command: "read",
  describe: "read all",
  handler() {
    read.read();
  },
});

yargs.command({
  command: "readOne",
  describe: "read one",
  handler(args) {
    const { title } = args;
    readOne.readOne(title);
  },
  // mettre un builder avec un title sinon le title est undefined à l'exe de la function
  builder: {
    title: {
      demandOption: true,
      type: "string",
      describe: "title",
    },
  },
});

yargs.parse();
