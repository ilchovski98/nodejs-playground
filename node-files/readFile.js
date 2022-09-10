const fs = require('fs').promises;

const readFile = async (path) => {
  try {
    const data = await fs.readFile(path);
    console.log(`File contents: ${data.toString()}`);
  } catch (error) {
    console.log(`Failed reading data from file: ${error}`);
  }
}

readFile(__dirname + '/greetings.txt');
