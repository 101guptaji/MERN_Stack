import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Component1 from './Components/Component1';
import HomePage from './Components/HomePage';
import LogInPage from './Components/LogInPage';

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

  const [isLogedIn, setLogedIn] = useState(false);

  // useEffect Example
  const [renderCount, setRenderCount] = useState(0);
  useEffect(()=>{
    setRenderCount(renderCount+1)
  }, [count]);

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
      <Component1 />

      {/* Conditional Rendering */}
      {
        isLogedIn ? <HomePage />
          : <LogInPage isLogedIn={isLogedIn} setLogedIn={setLogedIn} />
      }

      {/* useEffect Example */}
      <h3>Render Count: {renderCount}</h3>
    </>
  );
}

export default App;
