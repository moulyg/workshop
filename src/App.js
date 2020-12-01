import React from 'react';
import './App.css';

// pure function
function sum(a, b) {
    return a + b;
}
// impure function
function withdraw(account, amount) {
    account.total -= amount;
}

function WelcomeFn(props) {
    return <h1>Hello, {props.name}</h1>;
}

class WelcomeCls extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

function App() {
    return (<>
        <WelcomeFn name="Kandy Tuskers"/>
        <WelcomeCls name="Galle Gladiators"/>
    </>);
}

export default App;
