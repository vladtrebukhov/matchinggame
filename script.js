// some global variables

var count = 0;
var numberOfClicks = 0;
var imageArray = [];
var matches = 0;

// add grid for images to live in, and score div/button menu
const buttonDiv = document.createElement('div');
buttonDiv.setAttribute('class', 'button-div');
document.body.appendChild(buttonDiv);

const scoreContainer = document.createElement('div');
scoreContainer.setAttribute('class', 'score-container');
document.body.appendChild(scoreContainer);

const scoreDiv = document.createElement('div');
scoreDiv.setAttribute('class', 'score');
scoreContainer.appendChild(scoreDiv);

const resetButton = document.createElement('button');
resetButton.innerHTML = 'Reset';
resetButton.setAttribute('id', 'button');
buttonDiv.appendChild(resetButton);

const gameDiv = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
gameDiv.appendChild(grid);

// image object containing data
var images = [
  {
    name: 'cabin',
    source: './images/cabin.png'
  },

  {
    name: 'cake',
    source: './images/cake.png'
  },

  {
    name: 'circus',
    source: './images/circus.png'
  },
  {
    name: 'safe',
    source: './images/safe.png'
  },
  {
    name: 'submarine',
    source: './images/submarine.png'
  },
  {
    name: 'game',
    source: './images/game.png'
  }
];

let doubleImages = images.concat(images);

// sort the image numbers comparing a, b
// .5 - Math.random() return either a negative or positive number
// also written as .sort(() => .5 - Math.random())
doubleImages.sort((a, b) => {
  if (0.5 - Math.random() > 0) {
    return 1;
  } else {
    return -1;
  }
});

// create div with class of images and add a background of image source, then add to grid
doubleImages.forEach(image => {
  let imageDiv = document.createElement('div');
  imageDiv.setAttribute('class', 'image hidden');
  imageDiv.dataset.name = image.name;
  imageDiv.style.backgroundImage = `url(${image.source})`;
  grid.appendChild(imageDiv);
});

resetButton.onclick = function () {
  window.location.reload();
};

// listen for click event for each image in grid, add a class to it
grid.addEventListener('click', event => {
  images = event.target;
  // if images dont contain hidden in the class, stop click
  if (!images.classList.contains('hidden')) {
    return;
  }

  // don't allow a click count for anything other than the image
  if (event.target.classList[0] /* ["image"] */ !== 'image') {
    count = 0;
    return;
  }
  if (event) {
    images.classList.add('selected');
    count++;
    numberOfClicks++;
    scoreDiv.innerHTML = `Clicks: ${numberOfClicks}`;
  }

  // remove hidden class on event and add name of image to array for comparison
  if (event && count === 1) {
    images.classList.remove('hidden');
    imageArray.push(images.dataset.name);
  } else if (event && count === 2) {
    images.classList.remove('hidden');
    imageArray.push(images.dataset.name);
  }

  // if match
  if (imageArray[0] === imageArray[1]) {
    matches++;
    count = 0;
    imageArray = [];
    removeSelected();

    if (matches === 6) {
      scoreDiv.innerHTML = `You found all <br> the matches in <br> ${numberOfClicks} clicks!`;
    }
  }

  // if no match
  if (
    imageArray[0] !== imageArray[1] &&
    count === 2 &&
    imageArray[1] !== 'undefined'
  ) {
    setTimeout(function () {
      noMatch();
      removeSelected();
    }, 1200);
    count = 0;
    imageArray = [];
  }
});

// loops through the selected images and adds the hidden class for each if there is no match between the two
var noMatch = () => {
  let images = document.querySelectorAll('.selected');

  images.forEach(image => {
    image.classList.add('hidden');
  });
};

// removes selected property from ONLY the selected images
var removeSelected = () => {
  let images = document.querySelectorAll('.selected');

  images.forEach(image => {
    image.classList.remove('selected');
  });
};

/*
Below is the original code to create 6 images but limited by the fact that it creates
only single image versus two of each image

images.forEach((image) => {
  let imagesDiv = document.createElement('div');
  imagesDiv.setAttribute('class', 'image');
  imagesDiv.dataset.name = image.name;
  imagesDiv.style.backgroundImage = `url(${image.source})`

  grid.appendChild(imagesDiv);
})

let doubleImages = images.concat(images);

 REALLY smart idea of adding the image object to itself to create two
sets of the same image. I was stuck on this for a long time
when trying to assign the same value to two different images through
randomization. Took lots of time to figure this out!
*/
