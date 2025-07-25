const imageFolder = 'images/';
const imageList = [
  '1.png',
  '2.png',
];

let current = 0;
const slideshow = document.getElementById('slideshow');

const imgs = imageList.map(filename => {
  const img = document.createElement('img');
  img.src = imageFolder + filename;
  slideshow.appendChild(img);
  return img;
});

function showImage(index) {
  imgs.forEach((img, i) => {
    if (i === index) {
      img.classList.add("active");
    } else {
      img.classList.remove("active");
    }
  });
}


showImage(current);

setInterval(() => {
  current = (current + 1) % imgs.length;
  showImage(current);
}, 7000); // 5s per image
