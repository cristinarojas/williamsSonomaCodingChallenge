/*IFEE */
(function() {
  /* Consumes the JSON of products code */
  console.log('original-->', data);


  // ES5 Destructuring
  const { groups } = data;
  console.log('groups-->', groups);

  const productOverlayElement = document.getElementsByClassName('overlayProduct');
  const carouselProductsElement = document.getElementById('carousel-products');

  var showCarousel = function() {
      var parentNodeElement = this.parentNode.id;
      console.log(parentNodeElement);
      carouselProductsElement.classList.add("showCarousel");
  };

  // Adding the event listener to the overlayProduct element
  // then calling the function showCarousel to obtain the clicked parent clicked id
  for (let i = 0; i < productOverlayElement.length; i++) {
      productOverlayElement[i].addEventListener('click', showCarousel, false);
  }

})();
