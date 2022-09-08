const axios = require('axios');
const fs = require('fs').promises;

const saveMovies = async () => {
  try {
    const request = await axios('https://ghibliapi.herokuapp.com/films');

    let movieList = '';
    request.data.forEach(movie => {
      movieList += `${movie['title']}, ${movie['release_date']}\n`;
    });

    await fs.writeFile('asyncAwaitMovies.csv', movieList);
  } catch (error) {
    console.log(`Could not write movies to file: ${error}`);
  }
}

saveMovies();
