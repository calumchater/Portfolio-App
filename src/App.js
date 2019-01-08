import React, { Component } from 'react';

import './App.css';
import LoggedInLayout from './components/general/LoggedInLayout';
import CreateAccountLayout from './components/CreateAccount/CreateAccountLayout';
import CompaniesTab from './components/companies/CompaniesTab';
import companiesApi from './services/api/companiesApi';

import {DATA_URL} from './constants';

class App extends Component {

  constructor(){

    super()
    this.state = {
      username: '',
      new_username:'',
      newUsernameEntered:false,
      choice: '',
      usernameEntered: false,
      choiceMade: false,
      companies: [],
    }
  }

  componentDidMount() {
    fetch(DATA_URL + '/companies')
      .then(response=> response.json())
      .then(companies => {this.setState({ companies: companies})});
}

  handleUsernameChange = (e) => {
    this.setState({username: e.target.value, usernameEntered: true})
    if(e.target.value === ''){this.setState({usernameEntered: false})}
  }

  handleNewUsernameChange = (e) => {
    this.setState({new_username: e.target.value, newUsernameEntered: true})
    if(e.target.value === ''){this.setState({newUsernameEntered: false})}
  }

  handleClick = (e) => {
    const value = e.target.value;
    this.setState({
      choice: value,
      choiceMade:true
    });
  }

  renderSwitch(param) {
    switch(this.state.choice){
      case 'without-account':
          return(
            <CompaniesTab companies={this.state.companies}></CompaniesTab>
          );
      case 'create-account':
          return(
            <CreateAccountLayout companies={this.state.companies} username={this.state.new_username}></CreateAccountLayout>
          );
      case 'login-account':
          return(
            <LoggedInLayout companies={this.state.companies} username={this.state.username}></LoggedInLayout>
          )
      break;
      default:
      break;
  }
}

  render() {

          return(
          !this.state.choiceMade ? (
          <div className="container">
            <h2> Welcome to the Stock Market App. Please select an option </h2>
            <div className="choice-container">
              <div className="no-account">
                <button value="without-account" onClick={this.handleClick} > Enter without account</button>
              </div>
              <div className="want-account">
                <p> Create an Account</p>
                <input type="text" placeholder="Enter new username" onChange={this.handleNewUsernameChange}></input>
                {this.state.newUsernameEntered ? <button value="create-account"  onClick={this.handleClick}> Create </button> : null}
              </div>
              <div className="has-account">
                <p> Login with existing account </p>
                <input type="text" placeholder="Enter your username" onChange={this.handleUsernameChange}></input>
                {this.state.usernameEntered ? <button value="login-account"  onClick={this.handleClick}> Login </button> : null}
              </div>
            </div>
          </div>
        ) : (
        <div>
          {this.renderSwitch(this.state.choice)}
        </div>)
        )
      
  }
}

export default App;
