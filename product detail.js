import React from 'react';
const ProductDetail = ({ products }) => {
  return products(
    <div className="product-detail">
      <img src={`https://picsum.photos/400/600?random=${product.id}`} alt={product.name} />
      <h1>{product.name}</h1>
      <p>Company: {product.companies}</p>
      <p>Rating: {product.rating}</p>
      <p>Price: ${product.price}</p>
      <p>Discount: {product.discounts}%</p>
      <p>Availability: {product.availability ? 'In Stock' : 'Out of Stock'}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};
export default ProductsDetail;
