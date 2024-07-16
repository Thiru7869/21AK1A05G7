import React, { useState, useEffect } from 'react';
import { api } from '../api';
import FilterBar from '../components/FilterBar';
import Pagination from '../components/Pagination';
import ProductCard from '../components/ProductCard';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [filter, setFilter] = useState({
    category: '',
    company: '',
    rating: '',
    priceRange: '',
    availability: '',
  });

  useEffect(() => {
    api.getProducts().then((response) => {
      setProducts(response.data);
      setFilteredProducts(response.data);
    });
  }, []);

  const handleFilterChange = (filterType, value) => {
    setFilter((prevFilter) => ({ ...prevFilter, [filterType]: value }));
    api.getProducts(filter).then((response) => {
      setFilteredProducts(response.data);
    });
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <FilterBar
        onFilterChange={handleFilterChange}
        filter={filter}
      />
      <div className="product-grid">
        {paginatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={filteredProducts.length}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
export default AllProducts;