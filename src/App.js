import React from 'react';
import './App.css';

function FancyBorder(props) {
    return (
        <div className={'App-header'}>
            {props.children}
        </div>
    );
}

class App extends React.Component {


    render() {
        return (
            <FancyBorder color="blue">
                <h1 className="Dialog-title">
                    Welcome
                </h1>
                <p className="Dialog-message">
                    Thank you for visiting our spacecraft!
                </p>
            </FancyBorder>
        );
    }
}

export default App;
