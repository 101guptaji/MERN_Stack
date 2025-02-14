import React from 'react'

const LogInPage = ({ isLogedIn, setLogedIn }) => {

    return (
        <div style={{backgroundColor:'pink'}}>
            <h4>You are not loged in. Please Login first.</h4>
            <button onClick={()=>setLogedIn(!isLogedIn)}>LogIn</button>
        </div>
    )
}

export default LogInPage