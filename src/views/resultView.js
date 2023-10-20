export const createResultElement = (data) => {
  const searchResult = document.getElementById('result');
  searchResult.innerHTML = '';

  const error = 'No data available';

  searchResult.innerHTML = `
    <div class='info'>
      <h2>${data.Title ? data.Title : error}</h2>
      <div class='info-1'>
        <div>
          <div class='rating'>
            <img src="./images/star.png">
            <h4>${data.imdbRating ? data.imdbRating : 'Unknown'}</h4>
          </div>
          <p><strong>Year: </strong>${data.Year ? data.Year : 'Unknown'}</p>
          <p><strong>Runtime: </strong>${
            data.Runtime ? data.Runtime : 'Unknown'
          }</p>
          <p><strong>Language: </strong>${
            data.Language ? data.Language : 'Unknown'
          }</p>
          <p><strong>Awards: </strong>${
            data.Awards ? data.Awards : 'Unknown'
          }</p>
          <p><strong>Released: </strong>${
            data.Released ? data.Released : 'Unknown'
          }</p>
          <p><strong>Cast:</strong>${data.Actors ? data.Actors : 'Unknown'}</p>
          <div class='genre'><strong>${
            data.Genre ? data.Genre : 'Unknown'
          } </strong></div>
        </div>

        <img src=${
          data.Poster ? data.Poster : 'No image available'
        } class='poster'>
      </div>

      <p><strong>Plot:</strong>${
        data.Plot ? data.Plot : 'No plot available'
      }</p>
    </div>
  `;
};
