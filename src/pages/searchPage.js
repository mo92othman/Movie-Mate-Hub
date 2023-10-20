import { createSearchElement } from '../views/searchView.js';
import { data } from './data.js';
const USER_INTERFACE_ID = 'user-interface';

export const initSearchPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const searchElement = createSearchElement();
  userInterface.appendChild(searchElement);
};
