const movies = [
  { title: "Movie 1" },
  { title: "Movie 2" }
];

const container = document.getElementById("movies");

movies.forEach(movie => {
  const div = document.createElement("div");
  div.innerText = movie.title;
  container.appendChild(div);
});