// La pagina si caricherà solo quando tutto sarà visibile

window.addEventListener('load', function() {
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
  element: document.getElementById('product_viewer'),
  imagePath: './images/homepagescarpa/',
  filePrefix: 'img',
  fileExtension: '.png'
});

// 360° icon disappear when clicked
document.querySelector('#product_viewer').addEventListener('mousedown', function() {
  document.querySelector('.turnaroundicon').style = 'color: rgba(0, 0, 0, 0); background-color: rgba(0, 0, 0, 0);';
});

document.querySelector('#product_viewer').addEventListener('mouseup', function() {
  document.querySelector('.turnaroundicon').style = 'color: white; background-color: rgba(0, 0, 0, 0.616);';
});

// if you want to see it will roted 360 deg once it loaded then you have to write some extra code

ProductViewer.once('loaded', function () {
  ProductViewer.animate360();
})

var productViewer = document.getElementById('product_viewer');
productViewer.style.position = 'absolute';
productViewer.style.top = '50px';
productViewer.style.left = '100px';


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

