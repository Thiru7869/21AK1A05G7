import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={`https://picsum.photos/200/300?random=${product.id}`} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Company: {product.company}</p>
      <p>Rating: {product.rating}</p>
      <p>Price: ${product.price}</p>
      <p>Discount: {product.discount}%</p>
      <p>Availability: {product.availability ? 'In Stock' : 'Out of Stock'}</p>
    </div>
  );
};
export default ProductCard;