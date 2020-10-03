import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Fib from './Fib';
import OtherPage from './OtherPage';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                    <h1>Fib Calculator!</h1>
                    <Link to="/">Home</Link>
                    <Link to="/otherpage">Other Page</Link>
                <div>
                    <Route exact path="/" component={Fib}></Route>
                    <Route path="/otherpage" component={OtherPage}></Route>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
