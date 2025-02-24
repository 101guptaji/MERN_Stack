import React from 'react';
import ProductCard from './ProductCard';
import CartSummary from './CartSummary';
import SearchBar from './SearchBar';

const Home = ({ products }) => {

    return (
        <div>
            <div className='products-container'>
                <h1>Products List</h1>
                {
                    products && <div className="product-list">
                        {products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                }
            </div>
            <CartSummary />
        </div>
    );
}

export default Home;