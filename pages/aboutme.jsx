import React, { useState } from 'react'
import Nav from '../components/Nav/nav'

function aboutme() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (
        <div >
            <Nav/>
            <div className="main">
                <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            </div>
            
        </div>
    );
}


export default aboutme;
