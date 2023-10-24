import { favoriteArray } from '../../src/data.js';

// Create the result view with movie details(search by movie title).
export const createResultElement = (data) => {
  const searchResult = document.getElementById('result');
  searchResult.innerHTML = '';

  searchResult.innerHTML = `
  <div class='info'>
  <h1 style="text-transform: uppercase;">${data.Title ? data.Title : error}</h1>
  <div class='info-1'>        
    <div class='rating'>
        <img src="assets/icons/star.png">
        <h4>${data.imdbRating ? data.imdbRating : 'Unknown'}</h4>
    </div>
    <p><strong>Year: </strong>${data.Year ? data.Year : 'Unknown'}</p>
    <p><strong>Runtime: </strong>${data.Runtime ? data.Runtime : 'Unknown'}</p>
    <p><strong>Language: </strong>${
      data.Language ? data.Language : 'Unknown'
    }</p>
    <p><strong>Awards: </strong>${data.Awards ? data.Awards : 'Unknown'}</p>
    <p><strong>Released: </strong>${
      data.Released ? data.Released : 'Unknown'
    }</p>
    <p><strong>Cast:</strong>${data.Actors ? data.Actors : 'Unknown'}</p>
    <div class='genre'><strong>${
      data.Genre ? data.Genre : 'Unknown'
    } </strong></div>        
  </div>
  <div class='plot'>
    <p><strong>Plot:</strong>${data.Plot ? data.Plot : 'No plot available'}</p>
  </div>
  </div>
  <div class='poster'>
  <img src=${data.Poster ? data.Poster : 'No image available'} class='poster'>
  <button id="add-favorite-btn">Add to favorite</button>
  </div>
  `;
  // Get the "Add to favorite" button
  const addToFavoriteButton = document.getElementById('add-favorite-btn');
  addToFavoriteButton.addEventListener('click', () => {
    // Create an object with the title and poster path
    const movie = {
      title: data.Title,
      posterPath: data.Poster,
    };
    favoriteArray.push(movie);
  });
};

// Create a list of movies (browse by genre).
export const createBrowseElement = (data) => {
  const browseResult = document.getElementById('result');
  browseResult.innerHTML = '';

  const movieGrid = document.createElement('div');
  movieGrid.id = 'movie-grid';
  movieGrid.classList.add('movie-grid');

  // Loop through the array of movies and create poster elements
  data.results.forEach((movie) => {
    if (movie.poster_path) {
      const poster = document.createElement('img');
      poster.src = movie.poster_path;
      poster.alt = movie.title;

      const posterContainer = document.createElement('div');
      posterContainer.classList.add('poster-container');
      posterContainer.appendChild(poster);
      movieGrid.appendChild(posterContainer);
    }
  });
  browseResult.appendChild(movieGrid);
};

// Create the favorite view to display the list of favorite movies.
export const createFavoriteElement = (favoriteList) => {
  const favoriteContainer = document.getElementById('favorite');
  favoriteContainer.innerHTML = '';

  if (favoriteList.length === 0) {
    favoriteContainer.innerHTML = `
    <h1>No favorite movies added yet.</h1>
    <img src="assets/icons/empty-folder.png" alt="No movies" class="empty-folder">
  `;
  } else {
    // Loop through the favorite list and create HTML elements
    favoriteList.forEach((movie) => {
      const movieDiv = document.createElement('div');
      movieDiv.classList.add('favorite-movie');

      const titleElement = document.createElement('h2');
      titleElement.textContent = movie.title;

      const posterElement = document.createElement('img');
      posterElement.src = movie.posterPath;

      // Append title and poster to the movie div
      movieDiv.appendChild(titleElement);
      movieDiv.appendChild(posterElement);

      // Append the movie div to the favorite container
      favoriteContainer.appendChild(movieDiv);
    });
  }
};

// ---------------------------------------
// Create an error element.
export const createErrorElement = () => {
  const searchResult = document.getElementById('result');
  searchResult.innerHTML = '';
  const errorMessage = document.createElement('h1');
  errorMessage.textContent = 'Something went wrong!';
  searchResult.appendChild(errorMessage);
};
