const products = [
    {    
        id: 1,    
        name: "Product 1",    
        company: "Company A",    
        product: "Product Description 1",    
        discount: 10,
        availability: "In Stock"    
    },    
    {    
        id: 2,
        name: "Product 2",
        company: "Company B",
        product: "Product Description 2",
        discount: 20,
        availability: "Out of Stock"    
    },    
    ];
    const productsList = document.getElementById("products-list");
    products.forEach((product) => {    
    const listItem = document.createElement("li");
    listItem.innerHTML = `
         <h2 class="product-name">${product.name}</h2>
         <p>Company:${product.company}</p>
         <p>Product:${product.product}</p>
         <p>Discount:${product.discount}%</p>
         <p>Availability:${product.availability}</p>
         <a href="product.html?id=${product.id}">View Details</a>
     `;
     productsList.appendChild(listItem);
    });