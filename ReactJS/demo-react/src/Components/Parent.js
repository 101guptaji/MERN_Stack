import React from 'react'
import Child from './Child'
import Employee from './Employee'

const Parent = () => {
  return (
    <div>
        <Child fName="Hanni" age="25"/>
        <Child fName="Rahul" age="15"/>
        <Child fName="Sonu" age="58"/>
        <Child fName="Gupta" age="55"/>
        <br></br>
        <Employee count='1' empId='emp1'/>
        <Employee count={2} empId={'emp2'}/>
        <Employee count={3} empId={'emp3'}/>
    </div>
  )
}

export default Parent