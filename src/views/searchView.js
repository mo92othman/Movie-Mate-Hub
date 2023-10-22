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
      <select id="genre-select">
        <option value="">Select a Genre</option>
        <option value="28">Action</option>
        <option value="12">Adventure</option>
        <option value="16">Animation</option>
        <option value="35">Comedy</option>
        <option value="80">Crime</option>
        <option value="99">Documentary</option>
        <option value="18">Drama</option>
        <option value="10751">Family</option>
        <option value="14">Fantasy</option>
        <option value="36">History</option>
        <option value="27">Horror</option>
        <option value="10402">Music</option>
        <option value="9648">Mystery</option>
        <option value="10749">Romance</option>
        <option value="878">Science Fiction</option>
        <option value="10770">TV Movie</option>
        <option value="53">Thriller</option>
        <option value="10752">War</option>
        <option value="37">Western</option>
      </select>

    </div>
    <div id="result" class="result"></div>
  </div>
  `;
  return element;
};
