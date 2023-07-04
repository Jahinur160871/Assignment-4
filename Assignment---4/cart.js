// Function to create a product list item with "Add to Cart" button
function createProductListItem(product) {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>`;
    return li;
  }
  
  // Function to add a product to the shopping cart
  function addToCart(product) {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price}`;
    document.getElementById("cart-list").appendChild(li);
    
    const totalPrice = document.getElementById("total-amount");
    totalPrice.innerText = parseInt(totalPrice.innerText) + product.price;
  }









