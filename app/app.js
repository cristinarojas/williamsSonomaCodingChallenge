(function() { // IIFE

  // *** Consumes the JSON of products code ***
  // Obtaining the products - ES6 Destructuring
  const { groups: products } = data;

  // Obtaining actual DOM elements
  const mainElement = document.getElementById('main');
  const productOverlayElement = document.getElementsByClassName('overlayProduct');
  const carouselProductsElement = document.getElementById('carousel-products');
  const closeElement = document.getElementById('close');

  // *** Builds the product details page with all products ***
  // Loading each product and creating elements - Functional programming, ES6, vanilla Javascript
  products.forEach((product) => {
    const { id: productId } = product;
    const { href: heroPath } = product.hero; // Obtaining the hero image
    const { alt: heroAlt } = product.hero; // Obtaining the hero alt text
    const { name: productName } = product; // Obtaining the product name
    const { high: productPrice } = product.priceRange.regular; // Obtaining the product price
    const { www: productLink } = product.links; // Obtaining the product link

    // Creating elements with vanilla Javascript
    let figureElement = document.createElement('figure');
    let spanProductNameElement = document.createElement('span');
    let spanProductpriceElement = document.createElement('span');
    let heroProductImageElement = document.createElement('img');
    let overlayDiv = document.createElement('div');
    let showMoreElement = document.createElement('a');

    // *** Displays the product details, including price, product name and the main hero image ***
    // Inserting classes, attributes, id, etc. to the created elements
    figureElement.id = productId;
    spanProductNameElement.className = 'productName';
    spanProductNameElement.innerHTML = productName;

    spanProductpriceElement.className = 'productPrice';
    spanProductpriceElement.innerHTML = '$ ' + productPrice;

    heroProductImageElement.alt = heroAlt ? heroAlt : 'Williams Sonoma products'; // If have alt insert alt property if not then insert this default text
    heroProductImageElement.src = heroPath;

    overlayDiv.className = 'overlayProduct';
    showMoreElement.className = 'showMore';
    showMoreElement.href = productLink ? productLink : '#';
    showMoreElement.textContent = 'Show me more';

    // Append elements to the DOM
    figureElement.appendChild(spanProductNameElement);
    figureElement.appendChild(spanProductpriceElement);
    figureElement.appendChild(heroProductImageElement);
    figureElement.appendChild(overlayDiv);
    overlayDiv.appendChild(showMoreElement);

    // Append the figure element to main
    mainElement.appendChild(figureElement);
  });

  // ***  Interacts intuitively; if you click on the image, you should see an overlay with a carousal of all thumbnail images ***
  // Function sho show carousel
  let showCarousel = function() {
      let parentNodeElement = this.parentNode.id; // Obtaining the clicked id product
      carouselProductsElement.classList.add("showCarousel"); // Adding class to show carousel
  };

  // then calling the function showCarousel to obtain the clicked parent clicked id
  for (let i = 0; i < productOverlayElement.length; i++) {
      productOverlayElement[i].addEventListener('click', showCarousel, false);
  }

  // Handling DOM events
  closeElement.addEventListener('click', function() {
    console.log('here');
    carouselProductsElement.classList.add("hideCarousel");
  }, false);

})();
