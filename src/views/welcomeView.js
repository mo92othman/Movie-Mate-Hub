/**
 * Create the welcome screen with video background, logo, and text
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
  <div id="welcome-content" class="flex-container">
    <div id="video-container">
      <!-- Video -->
      <video controls autoplay loop muted>
        <source src="../assets/welcome.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="flex-item">
      <!-- Logo -->
      <img src="../assets/1200x500 (1).svg" alt="Logo" id="welcome-logo">
      <div class="text-container">
        <!-- Text -->
        <h1 id="welcome-title">Explore. Discover. Enjoy!</h1>
        <p id="welcome-description">Welcome to our movie world! Search for your favorite films, read plot summaries, discover new releases, and embark on cinematic adventures. It's movie time!</p>
        <button id="explore" class="explore-button">Explore</button>
      </div>
    </div>
  </div>

  `;
  return element;
};
