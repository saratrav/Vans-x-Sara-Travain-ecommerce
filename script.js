//Initialize Swiper 
      var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });


/// Bottoni swiper



function fadeIn() {
let buttonNext = document.getElementsByClassName('.swiper-button-next::after');
buttonNext.style = "background-color: red;";
}


///

/// Search

document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  const bootstrapClass = document.querySelector('.col.col-sm-12.col-md-6.col-lg-4');
  bootstrapClass.classList.remove('col-md-6', 'col-lg-4');
  bootstrapClass.classList.add('col-md-12', 'col-lg-12');

  var search = document.querySelector('#search').value.toLowerCase();

  console.log('Ricerca:', search);

  var items = document.querySelectorAll('.product');

  items.forEach(function(item) {
      var itemName = item.querySelector('.card-title').textContent.toLowerCase();
  
      if (itemName.includes(search)) {
          item.style.display = 'block';
      } else {
          item.style.display = 'none';
      }
        
      

  });
});



      
////

// filter categories

function filterProducts() {
  // Seleziona tutti gli elementi della griglia di prodotti
  var products = document.querySelectorAll('.product');

  // Ottieni le categorie selezionate
  var selectedCategories = [];
  var checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
  for (var i = 0; i < checkboxes.length; i++) {
      selectedCategories.push(checkboxes[i].value);
  }

  // Mostra solo i prodotti delle categorie selezionate
  for (var i = 0; i < products.length; i++) {
      if (selectedCategories.indexOf(products[i].dataset.category) !== -1 || selectedCategories.length === 0) {
          products[i].style.display = 'block';
      } else {
          products[i].style.display = 'none';
      }
  }
}

// Mostra tutti i prodotti all'avvio della pagina
filterProducts();

////

// Bottone filtro

let moved = false;

function move() {
    let barrafiltro = document.getElementById('barrafiltro');
    if (!moved) {
      barrafiltro.style = "transform: translateX(150px);";
        moved = true;
    } else {
      barrafiltro.style = "transform: translateX(0px);";
        moved = false;
    }
}

///

//Apparizione info al passaggio mouse

function showInfo() {
  document.querySelector(".infolibricheappare").style.display = "block";
}

function hideInfo() {
  document.querySelector(".infolibricheappare").style.display = "none";
}

