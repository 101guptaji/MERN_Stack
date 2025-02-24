import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateQuantity, removeItem } from '../Redux/Slices/cartSlice';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const handleQuantityChange = (e) => {
        dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }));
    };

    const handleRemove = () => {
        dispatch(removeItem({ id: item.id }));
    };

    const path = `/product/${item.id}`;

    return (
        <div className="product-card">
            <div className="product-img">
                <img src={item.image} alt={item.title} />
            </div>
            <div className='product-details'>
                <Link to={path}>
                    <h3>{item.title}</h3>
                </Link>
                <p>{item.price} USD</p>
                <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={handleQuantityChange}
                />
                <button onClick={handleRemove}>Remove</button>
            </div>
            
        </div>


    );
};

export default CartItem;