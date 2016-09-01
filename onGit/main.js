import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App.jsx';
import Menu from './Menu.jsx';
import Banner from './Banner';

//ReactDOM.render(<App headerProp="Main Property"/>, document.getElementById('app'));
ReactDOM.render(<Menu/>, document.getElementById('menu'));
ReactDOM.render(<Banner/>,document.getElementById('container'));