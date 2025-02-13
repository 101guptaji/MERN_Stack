import React from 'react'

const Employee = ({count, empId : empClass}) => { //empClass as alias of empId
  return (
    <div className={empClass}>
        I am Employee {count} with class {empClass}
    </div>
  )
}

export default Employee