import React, { useEffect, useRef, useState } from 'react'

const UseRef_StateTrack = () => {
    const [inputVal, setInputVal] = useState("");

    const prevInputVal = useRef("");

    useEffect(()=>{
        prevInputVal.current = inputVal
    }, [inputVal]);

  return (
    <div>
        <input type='text' value={inputVal} onChange={(e)=>setInputVal(e.target.value)} />
        <h3>Input value: {inputVal}</h3>
        <h3>Previous Value: {prevInputVal.current}</h3>
    </div>
  )
}

export default UseRef_StateTrack