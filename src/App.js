import React from 'react';
import './App.css';

function App() {

    const getTds = () => {
        return (
            <React.Fragment>
                <td>1</td>
                <td>2</td>
            </React.Fragment>
        )
    }
    return (
        <div>
            <table>
                <tr>{getTds()}</tr>
            </table>
        </div>
    );
}


export default App;
