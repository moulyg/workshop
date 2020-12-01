import './App.css';

function getGreeting(user) {
    if (user) {
        return <h1>Hello, {user}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}

function App() {


    const name = 'Mouly Guanrathne';
    const title = '<h1>mouly</h1><img src="" onerror="alert(\'ad\')" />'
    return (<>
        <h1>Hello, {name}</h1>
        <h1>Hello, {getGreeting(name)}</h1>
        <h1>Hello, {getGreeting(null)}</h1>
        <a href='#' title={name}>name</a>
        <div>{title}</div>
        {/*<div dangerouslySetInnerHTML={{__html: title}} />*/}
    </>);
}

export default App;
