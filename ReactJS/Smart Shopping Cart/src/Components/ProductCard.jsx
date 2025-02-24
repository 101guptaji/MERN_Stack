import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../Redux/Slices/cartSlice';

import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const isInCart = cartItems.some(item => item.id === product.id);

    const handleAddToCart = () => dispatch(addItem(product));
    const handleRemoveFromCart = () => dispatch(removeItem({ id: product.id }));

    const path = `/product/${product.id}`;

    return (
        <div className="product-card">
            <div className="product-img">
                <img src={product.image} alt={product.title} />
            </div>
            <div className='product-details'>
                <Link to={path}>
                    <h3>{product.title}</h3>
                </Link>
                <p>{product.price} USD</p>
                {isInCart ? (
                    <button onClick={handleRemoveFromCart}>Remove from Cart</button>
                ) : (
                    <button onClick={handleAddToCart}>Add to Cart</button>
                )}
            </div>
        </div>
    );
};

export default ProductCard;