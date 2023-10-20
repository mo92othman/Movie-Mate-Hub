import { createSearchElement } from '../views/searchView.js';
import { justTry } from '../../src/data.js';
import { createResultElement } from '../views/resultView.js';

const USER_INTERFACE_ID = 'user-interface';

export const initSearchPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const searchElement = createSearchElement();
  userInterface.appendChild(searchElement);
  const searchButton = document.getElementById('search-btn');

  searchButton.addEventListener('click', () => {
    createResultElement(justTry);
  });
};
