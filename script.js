const API_KEY = "c6be98929d674bd119c8ceacef331290";
const container = document.getElementById("movies");
const searchInput = document.getElementById("search");

// Modal Elements
const modal = document.getElementById("movie-modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalOverview = document.getElementById("modal-overview");
const modalRelease = document.getElementById("modal-release");
const modalRating = document.getElementById("modal-rating");
const closeModal = document.getElementById("close-modal");

function fetchMovies(url) {
  container.innerHTML = ""; 
  fetch(url)
    .then(res => res.json())
    .then(data => {
      const movies = data.results;
      if (!movies || movies.length === 0) {
        container.innerHTML = "<p>No movies found</p>";
        return;
      }

      movies.forEach(movie => {
        const div = document.createElement("div");

        const img = document.createElement("img");
        img.src = movie.poster_path
          ? "https://image.tmdb.org/t/p/w200" + movie.poster_path
          : "https://via.placeholder.com/150";

        const title = document.createElement("p");
        title.innerText = movie.title;

        div.appendChild(img);
        div.appendChild(title);

        // Click to open modal
        div.addEventListener("click", () => {
          modal.style.display = "block";
          modalImg.src = img.src;
          modalTitle.innerText = movie.title;
          modalOverview.innerText = movie.overview || "No description available.";
          modalRelease.innerText = movie.release_date || "N/A";
          modalRating.innerText = movie.vote_average || "N/A";
        });

        container.appendChild(div);
      });
    })
    .catch(error => {
      console.error("Error fetching movies:", error);
      container.innerHTML = "<p>Failed to load movies</p>";
    });
}

// Default popular movies
fetchMovies(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);

// Search feature
searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim();
  if (query) {
    fetchMovies(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
    );
  } else {
    fetchMovies(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
  }
});

// Close modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal if click outside
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});