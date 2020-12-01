import React from 'react';
import './App.css';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            numbers: [1, 2, 3, 4, 5]
        }
        this.add = this.add.bind(this);
    }

    add() {
        this.setState((state) => ({
            numbers: [...state.numbers, state.numbers.length + 1]
        }))
    }

    render() {
        const numbers = this.state.numbers;
        return (<>
                {numbers.map((number) => <li key={number.toString()}>{number}</li>)}
                <button onClick={this.add}>Add</button>
            </>
        )
    }
}

export default App;
