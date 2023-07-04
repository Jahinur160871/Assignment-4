// Function to clear the shopping cart
function clearCart() {
    document.getElementById("cart-list").innerHTML = "";
    document.getElementById("total-amount").innerText = "0";
  }
  
  // Populate the product list
  const productList = document.getElementById("product-list");
  products.forEach(product => {
    productList.appendChild(createProductListItem(product));
  });
  
  // Add event listeners
  const addToCartButtons = document.getElementsByClassName("add-to-cart");
  Array.from(addToCartButtons).forEach(button => {
    button.addEventListener("click", () => {
      const productId = parseInt(button.getAttribute("data-id"));
      const selectedProduct = products.find(product => product.id === productId);
      addToCart(selectedProduct);
    });
  });
  
  document.getElementById("clear-cart").addEventListener("click", clearCart);