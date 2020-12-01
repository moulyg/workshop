import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);
    const [clicks, setClicks] = useState(0);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        document.title = `You clicked ${clicks} times & count ${count}`;
    });

    // Similar to componentDidMount
    useEffect(() => {
        document.title = `Page Loaded`;
    }, []);

    // Similar to componentDidMount
    /* useEffect(() => {
        document.title = `Capture clicks only clicks: ${clicks}, count: ${count}`;
    }, [clicks]);*/

    return (
        <div>
            <p>You clicked {clicks} times</p>
            <p>You count {count} times</p>
            <button onClick={() => setClicks(clicks + 1)}>
                Click me
            </button>
            <button onClick={() => setCount(count + 1)}>
                Count
            </button>
        </div>
    );
}


export default App;
