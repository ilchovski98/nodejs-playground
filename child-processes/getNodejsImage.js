const { execFile, exec } = require('child_process');

execFile(__dirname + '/processNodejsImage.sh', (error, stdout, stderr) => {
  if (error) {
    console.log(`Error: ${error}`);
    return;
  }

  if (stderr) {
    console.log(`Stderr: ${stderr}`);
    return;
  }

  console.log(`Stdout\n${stdout}`);
});
