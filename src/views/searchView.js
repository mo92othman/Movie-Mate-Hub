/**
 * Create the search screen with header and search container
 * @returns {Element}
 */
export const createSearchElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
  <div class="search-page">
    <div class="header">
      <div class="header-logo">
        <!-- Logo Icon -->
        <img src="../assets/logo (3).svg" alt="Logo Icon" id="logo-icon">
      </div>
      <div class="log-in-container">
        <!-- Sign in/Sign up buttons -->
        <img src="../assets/icons/user.png" alt="User Icon" id="user-icon">
        <h4 id="sign-in">Sign in</h4>
        <span>|</span>
        <h4 id="sign-up">Sign up</h4>
        <button id="change-theme">Change Theme</button>
      </div>
    </div>
    <div class="search-field">
      <div class="search-placeholder">
        <input type="text" id="input" placeholder="Enter a movie name...">
        <!-- Search Icon -->
        <img src="../assets/icons/search.png" alt="Search Icon" id="search-icon">
      </div>
      <!-- Search Button -->
      <button id="search-btn">Search</button>
    </div>
    <div id="result" class="result"></div>
  </div>
  `;
  return element;
};
