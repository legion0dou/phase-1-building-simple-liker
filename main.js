// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  // Get references to the error modal and the empty heart
  const errorModal = document.querySelector("#modal");
  const emptyHeart = document.querySelector(".like-glyph");

  // Add a click event listener to the empty heart
  emptyHeart.addEventListener("click", () => {
    // Simulate a server call using mimicServerCall()
    mimicServerCall()
      .then(() => {
        // If the server call is successful:
        // Change the heart to a full heart
        emptyHeart.classList.add("activated-heart");
        // Remove the error modal if it was displayed previously
        errorModal.classList.add("hidden");
      })
      .catch(() => {
        // If the server call fails:
        // Display the error modal
        errorModal.classList.remove("hidden");
        // Display the server error message in the modal (you may need to adjust this part)
        errorModal.innerText = "Server Error. Please try again later.";
        // Use setTimeout to hide the modal after 3 seconds
        setTimeout(() => {
          errorModal.classList.add("hidden");
        }, 3000);
      });
  });

  // Add a click event listener to the full heart
  emptyHeart.addEventListener("click", () => {
    // Change the heart back to an empty heart
    emptyHeart.classList.remove("activated-heart");
  });
});




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
