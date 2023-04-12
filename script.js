//Initialize Swiper 
      var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
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
      barrafiltro.style.transform = "translateX(94%)";
        moved = true;
    } else {
      barrafiltro.style.transform = "translateX(0%)";
        moved = false;
    }
}

///
