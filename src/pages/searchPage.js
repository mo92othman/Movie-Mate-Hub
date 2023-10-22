import { createSearchElement } from '../views/searchView.js';
// import { browseArray } from '../../src/data.js';
import { createResultElement } from '../views/resultView.js';
import { createBrowseElement } from '../views/resultView.js';
import { createErrorElement } from '../views/resultView.js';
import { fetchData } from '../../src/fetchApi.js';
import { browse } from '../../src/fetchApi.js';

const USER_INTERFACE_ID = 'user-interface';

export const initSearchPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const searchElement = createSearchElement();
  userInterface.appendChild(searchElement);
  const searchButton = document.getElementById('search-btn');
  const inputElement = document.getElementById('input');

  searchButton.addEventListener('click', async () => {
    const movieTitle = inputElement.value;
    try {
      const movieData = await fetchData(movieTitle);
      createResultElement(movieData);
    } catch (error) {
      createErrorElement();
    }
  });

  // Attach an event listener to the select element
  const genreSelect = document.getElementById('genre-select');
  genreSelect.addEventListener('change', () => {
    const selectedGenre = genreSelect.value;
    console.log(selectedGenre);
    if (selectedGenre) {
      browse(selectedGenre)
        .then((data) => {
          createBrowseElement(data);
        })
        .catch((error) => {
          createErrorElement();
        });
    }
  });
};
