import React, { useContext, useEffect, useState } from 'react'

import { useDispatch } from 'react-redux';
import { setProducts } from '../Redux/Slices/productsSlice';
import { Link } from 'react-router-dom';
import { UserContext } from '../Contexts/userContext';

const SearchBar = () => {
    const user = useContext(UserContext);

    const dispatch = useDispatch();

    const [productName, setProductName] = useState("");

    function handleChange(value) {
        setTimeout(setProductName(value), 3000);
    }

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then((data) =>
                dispatch(setProducts(data.filter((item) =>
                    item.title.toLowerCase().includes(productName.toLowerCase())))));

    }, [productName])

    return (
        <div className='search-box'>
            <Link to='/'>
                <h2 style={{color:"white", textDecoration:"none"}}>Smart Shopping Cart</h2>
            </Link>
            <input type='text'
                value={productName}
                onChange={(e) => handleChange(e.target.value)}
                placeholder='Search...' />
            
            <Link to="/profile" style={{color:"white", textDecoration:"none"}}>{user.user.name}</Link>
        </div>
    )
}

export default SearchBar