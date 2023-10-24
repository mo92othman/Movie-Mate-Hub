// Import functions and modules necessary for the search page
import { createSearchElement } from '../views/searchView.js';
import { createResultElement } from '../views/resultView.js';
import { createBrowseElement } from '../views/resultView.js';
import { createFavoriteElement } from '../views/resultView.js';
import { createErrorElement } from '../views/resultView.js';
import { fetchData } from '../../src/fetchApi.js';
import { browse } from '../../src/fetchApi.js';
import { favoriteArray } from '../../src/data.js';

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
  const resultElement = document.getElementById('result');

  // Function to handle the fetch
  const performSearch = async () => {
    const movieTitle = inputElement.value;
    if (movieTitle.trim() === '') {
      // Show a message to the user
      resultElement.innerHTML =
        '<h2>Please enter a movie name before searching.</h2>';
    } else {
      try {
        // Fetch movie data based on the user's input
        const movieData = await fetchData(movieTitle);
        // Create and display the result element
        createResultElement(movieData);
      } catch (error) {
        createErrorElement();
      }
    }
  };

  // Attach a click event listener to the search button
  searchButton.addEventListener('click', performSearch);

  // Attach a keydown event listener to the input field
  inputElement.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      performSearch();
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

  // Change theme button function:
  const changeThemeButton = document.getElementById('change-theme');
  const body = document.body;
  let isDarkTheme = true;

  changeThemeButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const logoIcon = document.getElementById('logo-icon');
    const userIcon = document.getElementById('user-icon');
    const searchIcon = document.getElementById('search-icon');
    isDarkTheme = !isDarkTheme;
    if (isDarkTheme) {
      logoIcon.src = 'assets/logo (3).svg';
      userIcon.src = 'assets/icons/user.png';
      searchIcon.src = 'assets/icons/search.png';
    } else {
      logoIcon.src = 'assets/logo (2).svg';
      userIcon.src = 'assets/icons/user-dark.png';
      searchIcon.src = 'assets/icons/search-dark.png';
    }
  });

  const favoriteButton = document.getElementById('favorite-btn');
  let isFavoriteView = false;

  favoriteButton.addEventListener('click', () => {
    // Toggle between favorite and result views
    isFavoriteView = !isFavoriteView;

    // Call the createFavoriteElement function and pass the favorite array as an argument
    createFavoriteElement(favoriteArray);

    // Modify the display style based on the isFavoriteView flag
    const favoriteContainer = document.getElementById('favorite');
    const resultContainer = document.getElementById('result');

    if (isFavoriteView) {
      favoriteContainer.style.display = 'block';
      resultContainer.style.display = 'none';
      favoriteButton.style.backgroundColor = '#00cc66';
    } else {
      favoriteContainer.style.display = 'none';
      resultContainer.style.display = 'flex';
      favoriteButton.style.backgroundColor = '';
    }
  });
};
