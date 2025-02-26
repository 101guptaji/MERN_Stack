import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';
import CartSummary from './CartSummary';

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  
  const product = products.find(p => p.id === parseInt(id));

  return (
    <>
      {product ? (
        <div style={{margin:"10vh 0"}}>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>{product.price} USD</p>
          <ProductCard product={product} />
        </div>
      ) : (
        <p>Product not found.</p>
      )}

      <Link to="/" className='backBtn'>Go Back</Link>

      <CartSummary />
    </>
  );
};

export default ProductDetails;