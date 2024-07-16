import React from 'react';

const ProductsCard = ({ products }) => {
  return (
    <div className="products-card">
      <img src={`https://picsum.photos/200/300?random=${product.id}`} alt={product.name} />
      <h2>{products.name}</h2>
      <p>Company: {products.companies}</p>
      <p>Rating: {products.rating}</p>
      <p>Price: ${products.price}</p>
      <p>Discount: {product.discounts}%</p>
      <p>Availability: {products.availability ? 'In Stock' : 'Out of Stock'}</p>
    </div>
  );
};
export default ProductCard;
