// 360° view main page
var productViewer = new ProductViewer ({
    element: document.getElementById('product_viewer'),
    imagePath: './images',
    filePrefix: 'img',
    fileExtension: '.png'
  });

  // if you want to see it will roted 360 deg once it loaded then you have to write some extra code

  ProductViewer.once('loaded', function (){
    ProductViewer.animate360();
  })

  var productViewer = document.getElementById('product_viewer');
productViewer.style.position = 'absolute';
productViewer.style.top = '50px';
productViewer.style.left = '100px';
