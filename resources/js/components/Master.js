import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';

export default class Master extends Component {
    render() {
        return (   
            <Dashboard/>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Master/>, document.getElementById('example'));
}
