const API_KEY = "c6be98929d674bd119c8ceacef331290";

const container = document.getElementById("movies");

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
  .then(response => response.json())
  .then(data => {
    const movies = data.results;

    movies.forEach(movie => {
      const div = document.createElement("div");

      const img = document.createElement("img");
      img.src = "https://image.tmdb.org/t/p/w200" + movie.poster_path;

      const title = document.createElement("p");
      title.innerText = movie.title;

      div.appendChild(img);
      div.appendChild(title);

      container.appendChild(div);
    });
  })
  .catch(error => {
    console.error("Error fetching movies:", error);
  });