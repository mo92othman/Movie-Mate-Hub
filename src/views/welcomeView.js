/**
 * Create the welcome screen with video, logo, and text
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
  <div id="welcome-content" class="flex-container">
      <div class="flex-item">
        <!-- Video -->
        <video controls autoplay loop muted>
          <source src="../assets/welcome.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="flex-item">
        <!-- Logo -->
        <img src="../assets/1200x500 (1).svg" alt=" Logo" id="welcome-logo">
        <!-- Text -->
        <h1 id="welcome-title">Welcome Title</h1>
        <p id="welcome-description">
          Welcome msg
        </p>
        <button id="explore" class="explore-button">Explore</button>
      </div>
    </div>
  `;
  return element;
};
