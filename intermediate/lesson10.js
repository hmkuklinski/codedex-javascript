const jokeContainer = document.getElementById("jokeContainer");
const getJokeBtn = document.getElementById("getJokeBtn");

function fetchJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
  .then((response)=> response.json())
  //need data.setup and data.punchLine --> want to put it in jokeContainer
  .then((data)=>{
     const joke = `<p>${data.setup}</p><p>${data.punchline}</p>`;
     jokeContainer.innerHTML = joke;
   })
   //throw error and then display reason joke not displaying in jokeContainer
   .catch((error) => {
     console.error("Error fetching joke:", error.message);
     jokeContainer.innerHTML =
       "<p>Stop Joking around. Please try again later.</p>";
   });
}

getJokeBtn.addEventListener("click", fetchJoke);
