// fetch.js

async function fetchData(movieTitle) {
  const apiKey = 'e8318a99';
  const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(
    movieTitle,
  )}`;

  try {
    const response = await fetch(apiUrl);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error for proper error handling in the calling code.
  }
}

export { fetchData };

// function to fetch a differnt api that resolve to list of movies by genre
async function browse(genre) {
  const apiKey = 'a86d34ec56msh6f28cf67036c0cep17bf3cjsnf0a4e8eb36c1';
  const apiHost = 'advanced-movie-search.p.rapidapi.com';
  const page = 1;

  const url = `https://${apiHost}/discover/movie?with_genres=${genre}&page=${page}`;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': apiHost,
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    return result; // Return the fetched data
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error for proper error handling in the calling code.
  }
}

export { browse };
