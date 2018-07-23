<<<<<<< HEAD
// some global variables

var count = 0;
var numberOfClicks = 0;
var imageArray = [];

// add grid for images to live in and score div
const scoreDiv = document.createElement('div');
scoreDiv.setAttribute('class', 'score');
document.body.appendChild(scoreDiv);
=======
// add grid for images to live in
>>>>>>> ee04340e0a0435404694e0afb4ee00db6f09a80b

const gameDiv = document.getElementById('game');
const grid = document.createElement('div');
grid.setAttribute('class', 'grid');
gameDiv.appendChild(grid);

<<<<<<< HEAD
// image object containing data
=======

// image object
>>>>>>> ee04340e0a0435404694e0afb4ee00db6f09a80b
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
<<<<<<< HEAD

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



// listen for click event for each image in grid, add a class to it
grid.addEventListener('click', (event) => {
  images = event.target;
  const score = document.querySelector('.score');

  if (event && count < 2) {
    numberOfClicks++
    count++;
    score.innerHTML = numberOfClicks;
    imageArray.push(images.dataset.name);

    if (count === 1) {
      images.classList.remove('hidden');
    } else if (count === 2) {
      images.classList.remove('hidden');

      if (imageArray[0] !== imageArray[1]) {
        setTimeout(function () {
          noMatch();
          resetCount();
        }, 1200);
      } else {
        count = 0;
        resetCount();
      }
    }
  }
})

// add hidden class for each image
var noMatch = () => {
  let images = document.querySelectorAll('.image')

  images.forEach((image) => {
    image.classList.add('hidden');
  })
}


// reset the counter and array to restart click and match process
var resetCount = () => {
  count = 0;
  imageArray = [];
}



/*
Below is the original code to create 6 images but limited by the fact that it creates
=======
/*
Original code to create 6 images but limited by the fact that it creates
>>>>>>> ee04340e0a0435404694e0afb4ee00db6f09a80b
only single image versus two of each image

images.forEach((image) => {
  let imagesDiv = document.createElement('div');
  imagesDiv.setAttribute('class', 'image');
  imagesDiv.dataset.name = image.name;
  imagesDiv.style.backgroundImage = `url(${image.source})`

  grid.appendChild(imagesDiv);
<<<<<<< HEAD
})

let doubleImages = images.concat(images);

 REALLY smart idea of adding the image object to itself to create two
sets of the same image. I was stuck on this for a long time
when trying to assign the same value to two different images through
randomization. Took lots of time to figure this out!
*/
=======
}) */


/* REALLY smart idea of adding the image object to itself to create two
sets of the same image. I was stuck on this for a long time
when trying to assign the same value to two different images through
randomization. Took lots to figure this out!
*/
let doubleImages = images.concat(images);

doubleImages.forEach((image) => {
  let imagesDiv = document.createElement('div');
  imagesDiv.setAttribute('class', 'image');
  imagesDiv.dataset.name = image.name;
  imagesDiv.style.backgroundImage = `url(${image.source})`;

  grid.appendChild(imagesDiv);
})



console.log(doubleImages);
>>>>>>> ee04340e0a0435404694e0afb4ee00db6f09a80b
