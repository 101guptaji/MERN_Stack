import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import CartSummary from './CartSummary';
import SearchBar from './SearchBar';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);

  return (
    <div>
      <div className='products-container'>
        <h1>Cart: </h1>
        {
          cartItems && <div className="product-list">
            {cartItems.map((item, index) => (
              <CartItem key={index} item={item} />
            ))}
          </div>
        }
        {
          cartItems.length == 0 && <h2 style={{color:"red", margin:"20px"}}>Sorry! No items to checkout, <br/> Please add some items.</h2>
        }

        <Link to="/" className='backBtn'>Go Back</Link>
      </div>

      <CartSummary isCart={true} />
    </div>
  )
}

export default Cart