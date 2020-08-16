import React from "react";
import "App.css";
import thumb from './pic.jpg'
import Nav from './Nav'
// import ReactDOM from 'react-dom'

const App = () => (
    <div>
        <Nav />
        <h1 className="wow">Hello React!</h1>

        <img src={thumb} alt="" />
    </div>
);

export default App;
