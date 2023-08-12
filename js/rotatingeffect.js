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
  '/images/codes.jpg',
  '/images/web.jpg',
  '/images/coolsetup1.jpg',
  '/images/coolsetup4.jpg',
  '/images/coolsetup3.jpg',
];

const imagesThird = [
  '/images/apple.png',
  '/images/android-logo.png',
];

const imagesLast = [
  '/images/html-5.png',
  '/images/structure.png',
  '/images/css-3.png',
  '/images/js.png',
  '/images/php.png',
 
];

let currentImageIndexA = 0;
let currentImageIndexB = 0;
let currentImageIndexC = 0;
let currentImageIndexD = 0;

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
// Preload images
const allImages = [...imagesFirst, ...imagesSecond, ...imagesThird, ...imagesLast];
const preloadImages = (imageArray) => {
  for (const imagePath of imageArray) {
    const image = new Image();
    image.src = imagePath;
  }
};
preloadImages(allImages);

// Adjust the interval for mobile devices
const isMobileDevice = window.innerWidth <= 768; // Adjust this breakpoint as needed
const intervalTime = isMobileDevice ? 1500 : 1500;

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



setInterval(changeImageFirst, intervalTime);
setInterval(changeImageSecond, intervalTime);
setInterval(changeImageThird, intervalTime);
setInterval(changeImageLast, intervalTime);
