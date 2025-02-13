import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';

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

  function btnClick(){
    console.log("Button clicked");
    setBtn({
      backgroundColor: "red",
    });
    setCount(count+1);
  }

  return (
    <>
      <Navbar/>
      {/* Internal styling */}
      <h1 
        className='head1'
        style={{color: 'red', backgroundColor: 'yellow'}}>{heading1}</h1>

      <p style={paraStyle}>{desc}</p>
      
      <p>Button clicked: {count} times</p>
      <button 
        style={btnStyle}
        onClick={btnClick}>
          Click Me</button>
    </>
  );
}

export default App;
