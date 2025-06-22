document.addEventListener("DOMContentLoaded", function () {
  fetch("https://fakestoreapi.com/products")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const productContainer = document.querySelector("#product-container");
      console.log(productContainer);
      console.log(data);

      data.forEach(function (eachelement) {
        console.log(eachelement);
      });
    });
});
