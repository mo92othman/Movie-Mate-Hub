import { createWelcomeElement } from '../views/welcomeView.js';
import { initSearchPage } from './searchPage.js';

const USER_INTERFACE_ID = 'user-interface';

// Define the initialization function for the welcome page
export const initWelcomePage = () => {
  // Get the user interface element
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const welcomeElement = createWelcomeElement();
  userInterface.appendChild(welcomeElement);

  const exploreButton = document.getElementById('explore');
  exploreButton.addEventListener('click', start);
};

const start = () => {
  initSearchPage();
};
