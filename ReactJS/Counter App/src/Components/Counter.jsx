import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../Redux/Slices/counterSlice';

const Counter = () => {
    const count = useSelector(state => state.count);

    const dispatch = useDispatch();

    return (
        <>
            <h2>Count: {count}</h2>
            <button onClick={() => dispatch(decrement())}>Decreament</button>
            <button onClick={() => dispatch(increment())}>Increament</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </>
    )
}

export default Counter