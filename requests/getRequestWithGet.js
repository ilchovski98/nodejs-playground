const https = require('https');

let request = https.get('https://jsonplaceholder.typicode.com/users?_limit=2', async (res) => {
  if (res.statusCode !== 200) {
    console.error(`Did not get an OK from the server. Code: ${res.statusCode}`);
    // Tells nodejs to not consume the data of the request (faster than garbage colleciton)
    res.resume();
    return;
  }

  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('close', () => {
    console.log('Received all data.');
    console.log(JSON.parse(data));
  });
});

request.on('error', (err) => {
  console.error(`Encountered an error trying to make a request: ${err.message}`);
});
