import React from 'react';

const ProductDetail = ({ product }) => {
  return (
    <div className="product-detail">
      <img src={`https://picsum.photos/400/600?random=${product.id}`} alt={product.name} />
      <h1>{product.name}</h1>
      <p>Company: {product.company}</p>
      <p>Rating: {product.rating}</p>
      <p>Price: ${product.price}</p>
      <p>Discount: {product.discount}%</p>
      <p>Availability: {product.availability ? 'In Stock' : 'Out of Stock'}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};

export default ProductDetail;