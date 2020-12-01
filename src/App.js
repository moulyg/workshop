import React from 'react';
import './App.css';


function withBackGround(WrappedComponent) {
    return class extends React.Component {

        render() {
            return <WrappedComponent className='App-header' {...this.props} />;
        }
    }
}

function WrappedComponent(props) {
    return <div {...props}>WrappedComponent</div>;
}

function App() {
    const NewComponent = withBackGround(WrappedComponent);

    return (
        <div>
            <NewComponent/>
        </div>
    );
}


export default App;
