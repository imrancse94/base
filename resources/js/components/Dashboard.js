
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';
import Header from './Header';
export default class Dashboard extends Component{

render(){
    return(
      <React.Fragment>
        <Header/>
        <Sidebar/>
      </React.Fragment>
       
    );
}



}