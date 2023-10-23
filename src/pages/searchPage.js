// Import functions and modules necessary for the search page
import { createSearchElement } from '../views/searchView.js';
import { createResultElement } from '../views/resultView.js';
import { createBrowseElement } from '../views/resultView.js';
import { createErrorElement } from '../views/resultView.js';
import { fetchData } from '../../src/fetchApi.js';
import { browse } from '../../src/fetchApi.js';

const USER_INTERFACE_ID = 'user-interface';

// Initialize the search page
export const initSearchPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  // Create and append the static elements to the user interface
  const searchElement = createSearchElement();
  userInterface.appendChild(searchElement);

  // Get the search button and input elements(Search by title feature)
  const searchButton = document.getElementById('search-btn');
  const inputElement = document.getElementById('input');
  // Attach a click event listener to the search button
  searchButton.addEventListener('click', async () => {
    const movieTitle = inputElement.value;
    try {
      // Fetch movie data based on the user's input
      const movieData = await fetchData(movieTitle);
      // Create and display the result element
      createResultElement(movieData);
    } catch (error) {
      createErrorElement();
    }
  });

  // Get the select element (Browse by genre feature)
  const genreSelect = document.getElementById('genre-select');
  // Attach a change event listener to the genre select element
  genreSelect.addEventListener('change', () => {
    const selectedGenre = genreSelect.value;
    if (selectedGenre) {
      browse(selectedGenre)
        .then((data) => {
          // Create and display the browse element
          createBrowseElement(data);
        })
        .catch((error) => {
          createErrorElement();
        });
    }
  });
};
