import React, {useEffect, useState} from 'react'

const UseEffectExample = ({count}) => {
    const [renderCount, setRenderCount] = useState(0);

    useEffect(()=>{
      setRenderCount(renderCount+1)
    }, [count]);

  return (
    <div>
        <h1>useEffect Example</h1>
        <h3>Render Count: {renderCount}</h3>
    </div>
  )
}

export default UseEffectExample