import React, { useContext } from 'react'
import { myContext } from '../App'

const UseContextHook = () => {
    const myData = useContext(myContext);

    return (
        <div>
            <h1>useContext Hook Example</h1>
            <h2 style={{color: 'blue'}}>{myData}</h2>
        </div>
    )
}

export default UseContextHook