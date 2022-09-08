const fs = require('fs');
const request = require('request');

request('https://ghibliapi.herokuapp.com/films', (error, response, body) => {
  if (error) {
    console.error(`Could not send request to API: ${error.message}`);
    return;
  }

  if (response.statusCode != 200) {
    console.error(`Expected status code 200 but received ${response.statusCode}.`);
    return;
  }

  movies = JSON.parse(body);

  let movieList = '';

  movies.forEach(movie => {
    movieList += `${movie['title']}, ${movie['release_date']}\n`;
  });

  fs.writeFile('moviesCsv.csv', movieList, error => {
    if (error) {
      console.log(`Could not save movies to the file: ${error}`);
      return;
    }

    console.log('Saved movies in file');
  })
});
