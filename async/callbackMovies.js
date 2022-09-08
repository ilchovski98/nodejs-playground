const axios = require('axios');
const fs = require('fs');

axios('https://ghibliapi.herokuapp.com/films')
.then(response => {
  console.log('Successfully retrieved our list of movies!');

  let movieList = '';

  response.data.forEach(movie => {
    movieList += `${movie['title']}, ${movie['release_date']}\n`;
  });

  return fs.promises.writeFile('moviesCsv.csv', movieList);
})
.then(() => {
  console.log('Saved our list of movies to promiseMovies.csv');
})
.catch(error => {
  if (error) {
    console.error(`Could not send request to API: ${error.message}`);
  }
});
