// La pagina si caricherà solo quando tutto sarà visibile

window.addEventListener('load', function () {
  document.body.style.visibility = 'visible';
});


// Bottone menu

let moved = false;

function move() {
  let barrafiltro = document.getElementById('barrafiltro');
  if (!moved) {
    barrafiltro.style = "transform: translateX(-150px);";
    moved = true;
  } else {
    barrafiltro.style = "transform: translateX(0px);";
    moved = false;
  }
}



// 360° view main page
var productViewer = new ProductViewer({
  element: document.querySelector('.homeproduct_viewer .product_viewer'),
  imagePath: './images/homepagescarpa/',
  filePrefix: 'img',
  fileExtension: '.webp',

});


// 360° icon disappear when clicked
document.querySelector('.product_viewer').addEventListener('mousedown', function () {
  document.querySelector('.turnaroundicon').style = 'color: rgba(0, 0, 0, 0); background-color: rgba(0, 0, 0, 0);';
});

document.querySelector('.product_viewer').addEventListener('mouseup', function () {
  document.querySelector('.turnaroundicon').style = 'color: white; background-color: rgba(0, 0, 0, 0.616);';
});

// if you want to see it will roted 360 deg once it loaded then you have to write some extra code

productViewer.once('loaded', function () {
  productViewer.animate360();
})

//cookie

function chiudiCookie() {
  document.getElementById('cookie').style.display = 'none';
}


//************//
//GRIGLIA.HTML//
//************//

// Initialize Swiper//
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


//************//
//Prodotto1.HTML//
//************//


//change image when hover
function changeImage(smallImage) {
  var bigImage = document.querySelector('.big-image');
  bigImage.src = smallImage.src;
}


//il modello 3d appare
function viewAppear() {
  var scarpa3d = document.querySelector('.viewbox1');
  scarpa3d.style = 'display: block;';

  var overlay = document.querySelector('#overlay');

  // If overlay does not exist, create a new one
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.93)';
    overlay.style.zIndex = '1';
    overlay.id = 'overlay';
    document.body.appendChild(overlay);
  }
  overlay.style.display = 'block';
}

//close button
function viewDisappear() {
  var overlay = document.querySelector('#overlay');

  // If overlay exists, hide it
  if (overlay) {
    overlay.style.display = 'none';
  }

  var scarpa3d = document.querySelector('.viewbox1');
  scarpa3d.style.display = 'none';
}

// //
//Change color bg
function bgColorChange() {
  var modelViewer = document.querySelector('model-viewer');
  var blackWhiteButton = document.querySelector('.blackbgmodel');
  var coloreScarpa = document.querySelector('.colorescarpa')
  if (modelViewer.style.backgroundColor === 'black') {
    modelViewer.style.backgroundColor = 'white';
    modelViewer.style.border = '2px solid rgba(255, 255, 255, 0.479)';
    blackWhiteButton.style.backgroundColor === 'white';
    blackWhiteButton.style.backgroundColor = 'black';
    coloreScarpa.style.color === 'white';
    coloreScarpa.style.color = 'black';
  } else {
    modelViewer.style.backgroundColor = 'black';
    modelViewer.style.border = 'none';
    blackWhiteButton.style.backgroundColor = 'white';
    coloreScarpa.style.color = 'white';
  }
}
