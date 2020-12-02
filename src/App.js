import './App.css';
import React, {useCallback, useRef, useState} from "react";

const useRefCount = () => {
    const ref = useRef(0);
    console.log("current", ref.current++)
}
const Greeting = React.memo(({increment}) =>{
    useRefCount();
    return <button onClick={increment}>Increase</button>;
});
function App() {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount(c => c + 1);
    }, [setCount])
    return (<>
        <Greeting increment={() => setCount(count + 1)} />
        <h1>Hello, {count}</h1>
    </>);
}

export default App;
