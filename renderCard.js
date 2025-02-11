export const showCard = (movie) => {
  const movieList = document.querySelector("#movie-list");
  const movieCard = document.createElement("div");
  movieCard.classList.add(
    "flex",
    "flex-col",
    "items-center",
    "justify-center",
    "bg-white",
    "rounded-lg",
    "shadow-lg",
    "m-4",
    "p-4",
    "w-64",
    "h-96"
  );

  const moviePoster = document.createElement("img");
  moviePoster.classList.add("w-48", "h-72", "rounded-lg");
  moviePoster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  moviePoster.alt = movie.title;

  const movieTitle = document.createElement("div");
  movieTitle.classList.add("text-lg", "font-bold", "pt-1", "italic");
  movieTitle.innerText = movie.title;

  const movieReleaseDate = document.createElement("div");
  movieReleaseDate.classList.add("text-base", "pb-0.5");
  movieReleaseDate.innerText = "Realease Date: " + movie.release_date;

  const movieRating = document.createElement("div");
  movieRating.classList.add("text-yellow-500");
  movieRating.innerText = "Rating: " + movie.vote_average;

  const MyFavouriteMovieNotes =
    JSON.parse(localStorage.getItem("MyNotes")) || [];
  const movieNotes = document.createElement("div");
  for (const note of MyFavouriteMovieNotes) {
    if (note.noteTitle === movie.title) {
      movieNotes.classList.add("text-base", "pb-0.5");
      movieNotes.innerText = movieNotes.innerText + " " + note.myNotes;
    }
  }
  movieNotes.innerText = "My Notes: " + movieNotes.innerText;
//Creating the button element for adding notes through the favorite movie card
const addNotesBtn = document.createElement("button");
addNotesBtn.classList.add(
  "bg-gray-600",
  "text-gray-50",
  "p-1",
  "rounded",
  "text-base",
  "font-bold"
);
addNotesBtn.textContent = "Add Notes";

  movieList.appendChild(movieCard);
  movieCard.appendChild(moviePoster);
  movieCard.appendChild(movieTitle);
  movieCard.appendChild(movieReleaseDate);
  movieCard.appendChild(movieRating);
  movieCard.appendChild(movieNotes);
  movieCard.appendChild(addNotesBtn);
};
