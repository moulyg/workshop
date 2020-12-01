import React from 'react';
import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }
    greeting(props) {
        const isLoggedIn = props.isLoggedIn;
        if (isLoggedIn) {
            return <h1>Hi, User</h1>;
        }
        return <h1>Hi Guest</h1>;
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = <button onClick={this.handleLogoutClick}>Log Out</button>;
        } else {
            button = <button onClick={this.handleLoginClick}>Login</button>;
        }

        return (
            <div>
                {this.greeting(this.state)}
                {button}
                {isLoggedIn && <p>This is secured area</p>}
            </div>
        );
    }
}

export default App;
