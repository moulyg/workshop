import React from 'react';
import './App.css';


class LifeCycle extends React.Component {

    constructor(props) {
        super(props);
        console.log("constructor");
        this.state = {
            count: 0
        }
    }

    static getDerivedStateFromProps() {
        console.log("getDerivedStateFromProps");
        return null;
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentDidUpdated() {
        console.log("componentDidMount");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        if (nextState.count === 4) {
            return false;
        }
        return  true;
    }


    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate", prevProps, prevState);
        return prevState.count;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate", prevProps, prevState, snapshot);
    }

    render() {
        console.log("render");
        return <div>
            <div>
                <div>

                    <span style={{width: '100px', display: 'block'}}>Count:</span>

                    <small>{this.state.count}</small>
                </div>
                <hr/>
            </div>
            <button onClick={() => this.setState({count: this.state.count + 1})}>Add</button>
            <button onClick={() => this.forceUpdate()}>Force Update</button>
        </div>;
    }
}

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true,
            title: 'LPL'
        }
        this.updateStateDirectly = this.updateStateDirectly.bind(this);
    }

    updateStateDirectly() {
        this.state.show = false;
    }

    updateState() {
        // Wrong
        this.setState({
            show: !this.state.show,
        });

        // Correct
        /*this.setState((state, props) => ({
            show: !state.show
        }));*/
    }

    render() {
        return <div>
            <h1>{this.state.title}</h1>
            <hr />
            {this.state.show && <LifeCycle/>}
            <br/>
            <br/>
            <br/>
            <br/>
            <button onClick={() => this.updateState()}>{this.state.show ? 'Hide': 'Show'}</button>

            <br />
            <hr />
            Show: {this.state.show ? 'True': 'False'}
            <hr />
            <button onClick={() => this.updateStateDirectly()}>Update State Directly</button>
        </div>;
    }
}

export default App;
