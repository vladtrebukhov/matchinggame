// some global variables

var count = 0;
var numberOfClicks = 0;
var imageArray = [];
var matches = 0;
var previousSelection = null;


// add grid for images to live in, and score div/button menu
const scoreDiv = document.createElement('div');
scoreDiv.setAttribute('class', 'score');
document.body.appendChild(scoreDiv);

const resetButton = document.createElement('button');
resetButton.innerHTML = 'Reset';
resetButton.setAttribute('id', 'button');
document.body.appendChild(resetButton);

const gameDiv = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
gameDiv.appendChild(grid);

// image object containing data
var images = [{
  'name': 'cabin',
  'source': './images/cabin.png' },

{
  'name': 'cake',
  'source': './images/cake.png'
},

{
  'name': 'circus',
  'source': './images/circus.png'
},
{
  'name': 'safe',
  'source': './images/safe.png'
},
{
  'name': 'submarine',
  'source': './images/submarine.png'
},
{
  'name': 'game',
  'source': './images/game.png'
}
]

let doubleImages = images.concat(images);


// sort the image numbers comparing a, b
// .5 - Math.random() return either a negative or positive number
// also written as .sort(() => .5 - Math.random())
doubleImages.sort((a, b) => {
  if ((0.5 - Math.random()) > 0) {
    return 1;
  } else {
    return -1;
  }
})

// create div with class of images and add a background of image source
doubleImages.forEach((image) => {
  let imageDiv = document.createElement('div'); // <div></div>
  imageDiv.setAttribute('class', 'image hidden'); // <div class="image"> </div>
  imageDiv.dataset.name = image.name;
  imageDiv.style.backgroundImage = `url(${image.source})`;
  grid.appendChild(imageDiv);
})

resetButton.onclick = function () {
  location.reload();
}

// listen for click event for each image in grid, add a class to it
grid.addEventListener('click', (event) => {
  images = event.target;
  // don't allow the <section class="grid">  itself (this doesnt work properly) to be selected or the same card to be selected
  if (images.nodeName === 'section' || images === previousSelection) {
    count = 0;
    return;
  }
  images.classList.add('selected');

  if (event) {
    count++;
    numberOfClicks++;
    scoreDiv.innerHTML = `Clicks: ${numberOfClicks}`;
  }

  if (event && count === 1) {
    images.classList.remove('hidden');
    imageArray.push(images.dataset.name);
    previousSelection = event.target;
  } else if (event && count === 2) {
    images.classList.remove('hidden');
    imageArray.push(images.dataset.name);
  }

  if (imageArray[0] === imageArray[1]) { // if match
    matches++;
    count = 0;
    imageArray = [];
    removeSelected();

    if (matches === 6) {
      scoreDiv.innerHTML = `You found all <br> the matches in <br> ${numberOfClicks} clicks!`;
    }
  };

  if (imageArray[0] !== imageArray[1] && count === 2 && imageArray[1] !== 'undefined') { // if no match
    setTimeout(function () { noMatch(); }, 1200);
    count = 0;
    imageArray = [];
  }
})


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
  })
}


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
