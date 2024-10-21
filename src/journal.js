const imgUrl = "https://image.tmdb.org/t/p/w500";
const movieList = document.querySelector("#movie-list");

//Display movies cards of the favourit movies chosen through the home page
const FavouriteMovies = JSON.parse(localStorage.getItem("favorites")) || [];

for (const data of FavouriteMovies) {
  //creating the favorite movie card element
  const movieCard = document.createElement("div");
  movieCard.classList.add(
    "basis-1/5",
    "container",
    "max-auto",
    "m-3",
    "border-solid",
    "border-2",
    "bg-white",
    "rounded"
  );
  //creating favorite movie image element to place inside the card
  const moviePoster = document.createElement("img");
  moviePoster.classList.add("w-full", "rounded");
  moviePoster.src = imgUrl + data.poster_path;
  moviePoster.alt = data.title;
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

  //creating the favorite movie title element for the card
  const movieTitle = document.createElement("div");
  movieTitle.classList.add("text-lg", "font-bold", "pt-1", "italic");
  movieTitle.innerText = data.title;

  //creating the favorite movie element for placing the movie release data 
  const movieReleaseDate = document.createElement("div");
  movieReleaseDate.classList.add("text-base", "pb-0.5");
  movieReleaseDate.innerText = "Realease Date: " + data.release_date;

  //creating the favorite movie element for placing the movie rating
  const movieRating = document.createElement("div");
  movieRating.classList.add("text-yellow-500");
  movieRating.innerText = "Rating: " + data.vote_average;

  //building the card as it should display
  movieList.appendChild(movieCard);
  movieCard.appendChild(moviePoster);
  movieCard.appendChild(movieTitle);
  movieCard.appendChild(movieReleaseDate);
  movieCard.appendChild(movieRating);
  movieCard.appendChild(addNotesBtn);

  //on the event of clicking the add notes button a window prompt to allow users to enter notes
  addNotesBtn.addEventListener("click", () => {
    let notes = window.prompt(
      "Please add your notes about your favourite movie: " +
        moviePoster.alt +
        " here: ",
      "your notes"
    );
    //a check if  notes were entered
    if (notes != "your notes" ) {
      console.log(`my notes on ${moviePoster.alt} :` + notes);
      // const obj = {title: data.Title, myNotes: notes};
      // storeMyNotes (obj);
    } 
    
    else {
      console.log("no notes");
    }
  });
}

// function to store notes

// const storeMyNotes = (obj) => {
//   const FavouriteMovieNotes =
//       JSON.parse(localStorage.getItem("MyNotes")) || [];
//     console.log(FavouriteMovieNotes);

//    FavouriteMovieNotes.push(obj);
//     localStorage.setItem("MyNotes", JSON.stringify(FavouriteMovieNotes));
//  };

