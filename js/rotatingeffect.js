const cardImageDivFirst = document.querySelectorAll('#first-card__el');

const cardImageDivSecond = document.querySelectorAll('#second-card__el');

const cardImageDivThird = document.querySelectorAll('#third-card__el');

const cardImageDivLast = document.querySelectorAll('#last-card__el');

const imagesFirst = [
  '/images/home-bg.jpg',
  '/images/momocoder.jpg',
  '/images/Logoicon.png',
  
];

const imagesSecond = [
  '/images/cool setup 4.jpg',
  '/images/cool setup 3.jpg',
  '/images/codes.jpg',
  '/images/cool setup 1.jpg',
  '/images/web.png.png',
];

const imagesThird = [
  '/images/apple.png',
  '/images/android-logo.png',

  
];

const imagesLast = [
  '/images/html-5.png',
  '/images/structure.png',
  '/images/css-3.png',
  '/images/js.png.png',
  '/images/php.png',
  
];

let currentImageIndexA = 0;
let currentImageIndexB = 0;
let currentImageIndexC= 0;
let currentImageIndexD= 0;

function changeImageFirst() {
  currentImageIndexA = (currentImageIndexA + 1) % imagesFirst.length;
  cardImageDivFirst.forEach(div => {
    div.style.backgroundImage = `url(${imagesFirst[currentImageIndexA]})`;
  });
}

function changeImageSecond() {
  currentImageIndexB = (currentImageIndexB + 1) % imagesSecond.length;
  cardImageDivSecond.forEach(div => {
    div.style.backgroundImage = `url(${imagesSecond[currentImageIndexB]})`;
  });
}
function changeImageThird() {
  currentImageIndexC = (currentImageIndexC + 1) % imagesThird.length;
  cardImageDivThird.forEach(div => {
    div.style.backgroundImage = `url(${imagesThird[currentImageIndexC]})`;
  });
}
function changeImageLast() {
  currentImageIndexD = (currentImageIndexD + 1) % imagesLast.length;
  cardImageDivLast.forEach(div => {
    div.style.backgroundImage = `url(${imagesLast[currentImageIndexD]})`;
  });
}

setInterval(changeImageFirst, 1000); // Change image every 1.5 seconds
setInterval(changeImageSecond, 1000); // Change image every 1.5 seconds
setInterval(changeImageThird, 1000); // Change image every 1.5 seconds
setInterval(changeImageLast, 1000); // Change image every 1.5 seconds
