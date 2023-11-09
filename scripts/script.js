// VARIABLES //
// Music
var musicButton = document.querySelector("header button"); // Button for music
var music = document.querySelector("audio"); // Audio for music

// Navigation
var previous = document.querySelector("header section button:nth-of-type(1)");
var next = document.querySelector("header section button:nth-of-type(2)");
var title = document.querySelector("header section h1");
var year = document.querySelector("header p");
var desc = document.querySelectorAll("main ul li"); // The whole description box

// Objects + Sailor Moon
var object1 = document.querySelector("main ul:nth-of-type(1) li:nth-of-type(1) button img"); // Communicator
var object2 = document.querySelector("main ul:nth-of-type(1) li:nth-of-type(2) button img"); // Moon stick
var object3 = document.querySelector("main ul:nth-of-type(1) li:nth-of-type(3) button img"); // Tiara
var object4 = document.querySelector("main ul:nth-of-type(2) li:nth-of-type(1) button img"); // Red hair pieces
var object5 = document.querySelector("main ul:nth-of-type(3) li:nth-of-type(1) button img"); // Transformation brooch
var object6 = document.querySelector("main ul:nth-of-type(3) li:nth-of-type(2) button img"); // Disguise pen
var object7 = document.querySelector("main ul:nth-of-type(3) li:nth-of-type(3) button img"); // Silver Crystal
var usagi = document.querySelector("main ul:nth-of-type(2) li:nth-of-type(2) button img");



// ARRAYS //
// Objects + Sailor Moon
var object1Array = ["./images/s1-communicator.png", undefined, undefined, undefined, undefined];
var object2Array = ["./images/s1-moon-wand.png","./images/s2-cutie-moon-rod.png","./images/s3-spiral-heart-moon-rod.png","./images/s4-moon-kaleido.png","./images/s5-eternal-tiare.png"];
var object3Array = ["./images/s1-tiara.png", undefined, undefined, undefined, undefined];
var object4Array = ["./images/s1-red-hair-pieces.png", undefined, undefined, undefined, undefined];
var object5Array = ["./images/s1-trans-brooch.png", "./images/s2-crystal-star.png", "./images/s3-cosmic-heart-compact.png", "./images/s4-crisis-moon-compact.png", "./images/s5-eternal-moon-article.png"];
var object6Array = ["./images/s1-disguise-pen.png", undefined, undefined, undefined, undefined];
var object7Array = ["./images/s1-silver-crystal.png", undefined, "./images/s3-holy-grail.png", undefined, "./images/s5-holy-moon-chalice.png"];
var usagiArray= ["./images/s1-usagi.png", "./images/s2-usagi.png", "./images/s3-usagi.png", "./images/s4-usagi.png", "./images/s5-usagi.png"];

// Navigation
var titleArray = ["Sailor Moon", "Sailor Moon R", "Sailor Moon S", "Sailor Moon SuperS", "Sailor Moon Sailor Stars"];
var yearArray = ["1992-1993", "1993-1994", "1994-1995", "1995-1996", "1996-1997"];

// Keeps track of current index
var currentIndex = 0;



// FUNCTIONS //
// NAVIGATION
// Shows the right imgs, title and year for the right season, source: https://www.w3schools.com/howto/howto_js_slideshow.asp,https://stackoverflow.com/questions/2673147/javascript-array-value-is-undefined-how-do-i-test-for-that
// Function to update the visibility of objects and text based on currentIndex
function updateVisibility(array, index) {
  // Adds function to all arrays and their values
  [object1, object2, object3, object4, object5, object6, object7, usagi].forEach((object, i) => {
    // Checks if the array value is undefined
    if (array[i] === undefined) {
      // If it's undefined, hides the object
      object.style.display = "none";
    } else {
      // If it's not undefined, shows the object and sets its source based on the arrayIndex
      object.style.display = "block";
      object.src = array[i];
    }
  });

    // Does the same thing as the code above, just for the Sailor Moon image
    if (usagiArray[index] === undefined) {
      usagi.style.display = "none";
    } else {
      usagi.style.display = "block";
      usagi.src = usagiArray[index];
    }
  
  // Update the title and year based on currentIndex
  title.textContent = titleArray[index];
  year.textContent = yearArray[index];
}

// Makes the next button change the imgs
function nextImage() {
  // If currentIndex reaches the end, loop it back to the beginning
  currentIndex = (currentIndex + 1) % object1Array.length;
  // Ensures that the right img is shown when the buttons are pressed
  updateVisibility([object1Array, object2Array, object3Array, object4Array, object5Array, object6Array, object7Array].map(arr => arr[currentIndex]), currentIndex);
}

// Makes the previous button change the imgs, does the same as code above just in reverse
function previousImage() {
  currentIndex = (currentIndex - 1 + object1Array.length) % object1Array.length;
  updateVisibility([object1Array, object2Array, object3Array, object4Array, object5Array, object6Array, object7Array].map(arr => arr[currentIndex]), currentIndex);
}

// Sets the visibility on the first array number so it matches the HTML when the buttons haven't been pressed yet
updateVisibility([object1Array, object2Array, object3Array, object4Array, object5Array, object6Array, object7Array].map(arr => arr[currentIndex]), currentIndex);

// Listens for clicks on next and previous buttons
next.addEventListener("click", nextImage);
previous.addEventListener("click", previousImage);


// MUSIC
// Plays opening song
// Let music button listen for clicks, source: https://codepen.io/shooft/pen/bGKeeZL
musicButton.onclick = playSong;

function playSong() {
var musicIcon = musicButton.querySelector("header button img") 
  if (music.paused) {
    // Plays song and changes icon
    music.play();
    musicIcon.src = "./images/music.png";
    musicIcon.alt = "Pause song";
  }

  else {
    // Pauses song and changes icon
    music.pause();
    musicIcon.src = "./images/no-music.png";
    musicIcon.alt = "Play song";
  }
}


// TRANSFORMATION
// Function that makes Usagi transform back and forth when clicked, source: https://codepen.io/snowballdigital/pen/pGOZRQ
// Checks whether the animation is already playing
var usagiIsAnimating = false;

// Listens for clicks on the Sailor Moon image
usagi.addEventListener("click", function() {
  // Toggles the value
  usagiIsAnimating = !usagiIsAnimating;

  // Check if usagiIsAnimating is true
  if (usagiIsAnimating) {
    // Adds the class to trigger the animation
    usagi.classList.add("usagiTransform");
    // Changes the img source
    usagi.src = "./images/school-usagi.png";
  } else {
    // Adds the class even though it's already animating, this so on the click back it animates too
    usagi.classList.add("usagiTransform"); 
    // Changes the img source back to the original based on the currentIndex 
    usagi.src = usagiArray[currentIndex];
  }

  // Removes the class when animation is done
  usagi.addEventListener("animationend", function() {
    usagi.classList.remove("usagiTransform");
    // Ensures event listener is only used once after added
  }, { once: true });
});


// DESCRIPTION
// Function that makes the description box appear and disappear on click
// Adds function to every li item, shortens code, source: https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
desc.forEach((descBox) => {
  var buttonObject = descBox.querySelector("button");
  var article = descBox.querySelector("article");

  // Checks if there is an article
  if (article) {
    // Listens to clicks on the button
    buttonObject.addEventListener("click", () => {
      // Toggles the display when clicked
      if (article.style.display === "block" || getComputedStyle(article).display === "block") {
        // If visible, hide it
        article.style.display = "none"; 
      } else {
        // If hidden, show it
        article.style.display = "block"; 
      }
    });

    // Listens to clicks on the article so it can be turned off again
    article.addEventListener("click", () => {
      article.style.display = "none";
    });
  }
});
