import React from 'react'

const Child = (props) => {
  return (
    <div>My Name is {props.fName}. And I am {props.age} years old.</div>
  );
}

export default Child