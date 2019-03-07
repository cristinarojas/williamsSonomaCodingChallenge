(function() { // IIFE
  // *** Consumes the JSON of products code ***
  // Obtaining the products - ES6 Destructuring
  const { groups: products } = data;
  let elementsCreated = false;

  // Obtaining actual DOM elements
  const mainElement = document.getElementById('main');
  const productOverlayElement = document.getElementsByClassName('overlayProduct');
  const carouselProductsElement = document.getElementById('carousel-products');
  const closeElement = document.getElementById('close');
  const carouselElement = document.getElementById('carousel-inner');
  const carouselIndicatorsElement = document.getElementById('carousel-indicators');
  let thumbnailsData = [];

  // *** Builds the product details page with all products ***
  // Loading each product and creating elements - Functional programming, ES6, vanilla Javascript
  products.forEach((product, index) => {
    const { id: productId } = product;
    const { href: heroPath } = product.hero; // Obtaining the hero image
    const { alt: heroAlt } = product.hero; // Obtaining the hero alt text
    const { name: productName } = product; // Obtaining the product name
    const { high: productPrice } = product.priceRange.regular; // Obtaining the product price
    const { www: productLink } = product.links; // Obtaining the product link

    // Obtaining all the product thumbnail for carousel section
    thumbnailsData.push(product.thumbnail);

    // Creating elements with vanilla Javascript
    let figureElement = document.createElement('figure');
    let spanProductNameElement = document.createElement('span');
    let spanProductpriceElement = document.createElement('span');
    let heroProductImageElement = document.createElement('img');
    let overlayDiv = document.createElement('div');
    let showMoreElement = document.createElement('a');

    // *** Displays the product details, including price, product name and the main hero image ***
    // Inserting classes, attributes, id, etc. to the created elements
    figureElement.id = `${productId}|${index}`;
    figureElement.role = 'group'; // For accesibility
    spanProductNameElement.className = 'productName';
    spanProductNameElement.innerHTML = productName;

    spanProductpriceElement.className = 'productPrice';
    spanProductpriceElement.innerHTML = '$ ' + productPrice;

    heroProductImageElement.role = 'presentation'; // For accesibility
    heroProductImageElement.alt = heroAlt ? heroAlt : 'Williams Sonoma products'; // If have alt insert alt property if not then insert this default text
    heroProductImageElement.src = heroPath;

    overlayDiv.className = 'overlayProduct';
    showMoreElement.className = 'showMore';
    showMoreElement.href = '#';
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
    let [parentNodeElement, parentIndex] = this.parentNode.id.split('|'); // Destructuring [id, index]
    carouselProductsElement.classList.add('showCarousel'); // Adding class to show carousel

    if (!elementsCreated) {
      thumbnailsData.forEach((thumbnail, index) => {
        const { href: thumbnailHref } = thumbnail; // Obtaining the href of thumbnail
        let thumbnailImg = document.createElement('img'); // Creating each thumbnail img
        let carouselItemElement = document.createElement('div');
        let indicatorElement = document.createElement('li');

        // Inserting classes, attributes to thumbnail img
        carouselItemElement.id = `item-${index}`;
        carouselItemElement.className = index === Number(parentIndex) ? 'carousel-item active' : 'carousel-item';
        thumbnailImg.className = 'd-block';
        thumbnailImg.src =  thumbnailHref;
        indicatorElement.setAttribute('data-target', '#carouselExampleIndicators');
        indicatorElement.setAttribute('data-slide-to', index);
        indicatorElement.setAttribute('role', 'listitem'); // For accesibility

        // Adding active class to target bullet
        if (index === Number(parentIndex)) {
          indicatorElement.className = 'active';
        }

        // Append elements to the DOM
        carouselItemElement.appendChild(thumbnailImg);
        carouselIndicatorsElement.appendChild(indicatorElement);
        carouselElement.appendChild(carouselItemElement);
      });
    } else {
      // Getting all existing carousel items
      const carouselItems = Array.from(document.getElementsByClassName('carousel-item'));

      // Adding active for target item
      carouselItems.forEach(item => {
        if (item.id === `item-${parentIndex}`) {
          item.className = 'carousel-item active';
        } else {
          item.className = 'carousel-item';
        }
      });
    }

    // This will avoid to duplicate the elements
    elementsCreated = true;
  };

  // Then calling the function showCarousel to obtain the clicked parent clicked id
  for (let i = 0; i < productOverlayElement.length; i++) {
    productOverlayElement[i].addEventListener('click', showCarousel, false);
  }

  // Handling DOM events
  closeElement.addEventListener('click', function() {
    carouselProductsElement.classList.remove('showCarousel');
  }, false);
})();
