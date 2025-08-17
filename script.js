const addToCartButtons = document.querySelectorAll('.add-to-cart, .buy-btn');

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productName = button.dataset.name;
    const productPrice = parseFloat(button.dataset.price);

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingProductIndex = cart.findIndex(item => item.name === productName);
    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += 1;
    } else {
      cart.push({ name: productName, price: productPrice, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(`${productName} added to cart. Quantity: ${cart[existingProductIndex !== -1 ? existingProductIndex : cart.length - 1].quantity}`);
  });
});
