import { createContext, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Component1 from './Components/Component1';
import UseReducerExample from './Components/UseReducerExample';
import ConditionalRendering from './Components/ConditionalRendering';
import UseEffectExample from './Components/UseEffectExample';
import UseContext1 from './Components/UseContext1';
import UseRef_StateTrack from './Components/UseRef_StateTrack';

// exporting this context
export const myContext = createContext();

function App() {
  let heading1 = "My Heading";
  let desc = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore officiis repellendus voluptate eum iste debitis quaerat eos molestiae, sint quo deleniti tenetur nam quae porro adipisci dicta voluptates perspiciatis nihil?"

  //  style using Javascript object
  let paraStyle = {
    color: "red",
    backgroundColor: "aqua",
    fontSize: '28px'
  };

  // State 
  let [count, setCount] = useState(0);

  const [btnStyle, setBtn] = useState({
    color: "white",
    backgroundColor: "green",
  });

  function btnClick() {
    console.log("Button clicked");
    setBtn({
      backgroundColor: "red",
    });
    setCount(count + 1);
  }

  return (
    <>
      <Navbar />
      {/* Internal styling */}
      <h1
        className='head1'
        style={{ color: 'red', backgroundColor: 'yellow' }}>{heading1}</h1>

      <p style={paraStyle}>{desc}</p>

      <p>Button clicked: {count} times</p>
      <button
        style={btnStyle}
        onClick={btnClick}>
        Click Me
      </button>

      {/* Mapping Example */}
      {/* <Component1 /> */}

      {/* Conditional Rendering */}
      {/* <ConditionalRendering /> */}

      {/* useEffect Example */}
      {/* <UseEffectExample count={count}/> */}

      {/* UseReducer Example */}
      {/* <UseReducerExample /> */}

      {/* Context API Example*/}
      {/* <myContext.Provider value={"This is a context data from App.js"} >
        <UseContext1 />
      </myContext.Provider> */}

      {/* useRef Example */}
      {/* <UseRef_StateTrack /> */}

        
    </>
  );
}

export default App;
