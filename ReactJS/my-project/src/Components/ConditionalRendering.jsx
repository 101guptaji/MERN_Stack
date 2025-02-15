import React, {useState} from 'react';
import HomePage from './HomePage';
import LogInPage from './LogInPage';

const ConditionalRendering = () => {
    const [isLogedIn, setLogedIn] = useState(false);

    return (
        <div>
            <h1>Conditional Rendering Example</h1>
            {
                isLogedIn ? <HomePage />
                    : <LogInPage isLogedIn={isLogedIn} setLogedIn={setLogedIn} />
            }
        </div>
    )
}

export default ConditionalRendering