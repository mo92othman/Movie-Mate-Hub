import { createWelcomeElement } from '../views/welcomeView.js';
import { initSearchPage } from './searchPage.js';

const USER_INTERFACE_ID = 'user-interface';
export const initWelcomePage = () => {
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
