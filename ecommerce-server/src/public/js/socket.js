const socket = io();

socket.on('products', (products) => {
  const productList = document.getElementById('product-list');
  productList.innerHTML = '';

  if (Array.isArray(products)) { // Comprueba si 'products' es un array
    products.forEach(product => {
      const li = document.createElement('li');
      li.textContent = `${product.title} - $${product.price}`;
      productList.appendChild(li);
    });
  } else {
    console.error('Error: Los datos recibidos no son un array:', products);
    // Maneja el caso en que no sea un array adecuadamente
  }
});