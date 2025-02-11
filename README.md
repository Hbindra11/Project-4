# Project 3: Movie Diary App using TMDB API (source: LMS)

## Description: 
Create a movie diary using the TMDB API.
### Requirements:
#### Homepage:
- Retrieve and display a list of popular movies from TMDB API.
- Include a search bar at the top.
- On submitting a search, display a dialog with the search results or feedback.
- Each movie should display an image, name, and relevant info as a card.
- Include a button to add the movie to favorites.
- Add the movie to an array of objects in localStorage.
#### Journal Page:
- Retrieve and display the list of favorite movies from localStorage.
- Each movie should be rendered with an image, name, and relevant info.
- Include a button to add personal notes to each movie.
- Save these notes to the corresponding object in localStorage.
#### Navigation:
Create a navbar in both pages to navigate back and forth between the homepage and the journal page.
#### Styling:
Use TailwindCSS for styling.

### Project 4: Refactor the Movie diaries App:
 Refactoring is the process of improving the internal structure, readability, and maintainability of a software codebase without altering its external behavior or functionality. So, we what to fix existing bugs, handling errors and exepctions more elegantly and improve readability, from adding comments that properly describe our logic to organising our code in a better way. Out there, in a real job, a product’s development doesn’t end with its launch, not only new features will be added but, perhaps more importantly, existing ones will be improved.
#### Focus on:
- Adding comprehensive comments
- Fixing bugs
#### Handling exemptions, e.g.:
- Edge cases: what happens if there are no results?
- Error handling: what happens if, say, the API throws an error?
- Refactoring for readability and scalability

#### File Structure:
Each HTML file should link to distinct JS files (main.js for index.html and journal.js for journal.html).
You might want to take a look into this one for having multiple HTML entry files in Parcel
Use Parcel for bundling JavaScript files.
