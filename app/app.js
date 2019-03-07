/*IFEE */
(function() {
  /* Consumes the JSON of products code */
  console.log('original-->', data);
  // ES5 Destructuring
  const { groups } = data;
  console.log('groups-->', groups);


  // Obtaining all the DOM elements
  const productOverlayElement = document.getElementsByClassName('overlayProduct');
  const carouselProductsElement = document.getElementById('carousel-products');
  const closeElement = document.getElementById('close');

  // Function sho show carouse
  let showCarousel = function() {
      let parentNodeElement = this.parentNode.id; // Obtaining the clicked id product
      carouselProductsElement.classList.add("showCarousel"); // Adding class to show carousel
  };

  // Adding the event listener to the overlayProduct element
  // then calling the function showCarousel to obtain the clicked parent clicked id
  for (let i = 0; i < productOverlayElement.length; i++) {
      productOverlayElement[i].addEventListener('click', showCarousel, false);
  }

  // Handle close
  closeElement.addEventListener('click', function() {
    console.log('here');
    carouselProductsElement.classList.add("hideCarousel");
  }, false);

})();
