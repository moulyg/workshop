import React from 'react';
import './App.css';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
        this.updateState = this.updateState.bind(this);
    }

    clickEvent() {
        alert('Foo')
    }

    clickWithArgument(text) {
        alert(text)
    }

    updateState() {
        this.setState((state, props) => ({
            count: state.count + 1
        }));
    }


    render() {
        return <div>
            <button onClick={this.clickEvent}>Click Event</button>
            <hr/>
            <button onClick={this.updateState}>Update State ({this.state.count})</button>
            <hr/>
            <button onClick={() => this.clickWithArgument('2020')}>Delete Row</button>
            <button onClick={this.clickWithArgument.bind(this, '2024')}>Delete Row</button>
        </div>;
    }
}

export default App;
