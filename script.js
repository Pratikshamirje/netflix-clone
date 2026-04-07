const movies = [
  {
    title: "Pushpa",
    image: "https://via.placeholder.com/150"
  },
  {
    title: "RRR",
    image: "https://via.placeholder.com/150"
  },
  {
    title: "KGF",
    image: "https://via.placeholder.com/150"
  }
];
const container = document.getElementById("movies");

movies.forEach(movie => {
  const div = document.createElement("div");

  const img = document.createElement("img");
  img.src = movie.image;

  const title = document.createElement("p");
  title.innerText = movie.title;

  div.appendChild(img);
  div.appendChild(title);

  container.appendChild(div);
});