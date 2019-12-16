import React, { Component } from 'react';
import './App.css';
import { createStore } from 'redux';
import Spinner from 'react-bootstrap/Spinner'
import YolanHeader from './components/YolanHeader'
import AppComponent from './components/AppComponent'

import { connect } from "react-redux";


function mapDispatchToProps(dispatch) {
  return {
  };
};

class MyApp extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
     }
  }


  componentDidMount = () => {

  }



  render(){
    return (
      <div className="App" >My App
        <YolanHeader height={50} children={"Gift Generator"} fontSize={18} backgroundColor={"rgba(123,189,175,1)"}/>
        <AppComponent/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    connected:state.account.connectedRedux,
    displayLoading:state.helper.displayLoadingRedux,
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(MyApp);
export default App;
