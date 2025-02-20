import React, { useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'increament':
            // always return a new object
            return { ...state, count: state.count+1};
        case 'decreament':
            return {...state, count: state.count-1};
        case 'Toggle':
            return {...state, toggle: !state.toggle}; 
        default:
            throw Error('Unknown action.');
    }
}

const initialState = {
    count: 0,
    toggle: false,
    data: "You are doing great",
}

const UseReducerExample = () => {
    // State is read-only. Don’t modify any objects or arrays in state
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleDecreament = function () {
        dispatch({ type: "decreament" });
    
    }
    const handleIncreament = function () {
        dispatch({ type: "increament" });
    
    }

    return (
        <div>
            <h1>useReducer Example</h1>
            <section style={{display: 'flex', gap: '10px', height: '32px', alignItems: 'center'}}>
                <button onClick={handleDecreament}>-</button>
                <h2 style={{fontSize: '22px'}}>{state.count}</h2>
                <button onClick={handleIncreament}>+</button>
            </section>
            <section>
                <button onClick={()=>  dispatch({ type: "Toggle" })}>
                    {state.toggle ? "Hide Data" : "Show Data"}
                </button>
                {
                    state.toggle && <h3>{state.data}</h3>
                }
            </section>
        </div>
    )
}

export default UseReducerExample