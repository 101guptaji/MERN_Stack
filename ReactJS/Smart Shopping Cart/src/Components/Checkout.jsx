import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { clearCart } from '../Redux/Slices/cartSlice'

const Checkout = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(clearCart())}, []);

  return (
    <div>
      <h2>Congratulation! You order has been placed</h2>
      <Link to='/'>Continue Shopping</Link>
    </div>
  )
}

export default Checkout