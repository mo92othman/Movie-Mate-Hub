// function to fetch an api that gives details about one movie:
async function fetchData(movieTitle) {
  const apiKey = 'e8318a99';
  const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(
    movieTitle,
  )}`;

  const response = await fetch(apiUrl);
  if (response.ok) {
    const result = await response.json();
    console.log(result);
    return result;
  }
}
export { fetchData };

// function to fetch a different api that resolve to list of movies by genre
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

  const response = await fetch(url, options);
  if (response.ok) {
    const result = await response.json();
    return result;
  }
}
export { browse };
