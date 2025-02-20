import React from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../Redux/Slices/counterSlice';

const Counter = () => {
    const count = useSelector((state) => {
        return state.count;
    });

    const dispatch = useDispatch();

    return (
        <>
            <h2>Count: {count}</h2>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
        </>
    )
}

export default Counter