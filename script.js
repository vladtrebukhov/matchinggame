// add grid for images to live in

const gameDiv = document.getElementById('game');
const grid = document.createElement('div');
grid.setAttribute('class', 'grid');
gameDiv.appendChild(grid);


// image object
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
/*
Original code to create 6 images but limited by the fact that it creates
only single image versus two of each image

images.forEach((image) => {
  let imagesDiv = document.createElement('div');
  imagesDiv.setAttribute('class', 'image');
  imagesDiv.dataset.name = image.name;
  imagesDiv.style.backgroundImage = `url(${image.source})`

  grid.appendChild(imagesDiv);
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
