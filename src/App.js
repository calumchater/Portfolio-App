import React, { Component } from 'react';

import './App.css';
import LoggedInLayout from './components/general/LoggedInLayout';
import CreateAccountLayout from './components/CreateAccount/CreateAccountLayout';
import CompaniesTab from './components/companies/CompaniesTab';
import companiesApi from './services/api/companiesApi';

class App extends Component {

  constructor(){

    super()
    this.state = {
      username: '',
      choice: '',
      usernameEntered: false,
      choiceMade: false,
      companies: [],
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/companies')
      .then(response=> response.json())
      .then(companies => {this.setState({ companies: companies})});
}

  handleChange = (e) => {
    this.setState({username: e.target.value, usernameEntered: true})
    if(e.target.value === ''){this.setState({usernameEntered: false})}
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
            <CreateAccountLayout companies={this.state.companies}></CreateAccountLayout>
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

  loadCompanies (){
    companiesApi.getAllCompanies()
    .then(response=> {
      return (response.data.json())
    })
  }

  render() {

          return(
          !this.state.choiceMade ? (
          <div className="choice-container">
            <div className="no-account">
              <button value="without-account" onClick={this.handleClick} > Enter without account</button>
            </div>
            <div className="want-account">
              <button value="create-account" onClick={this.handleClick}> Create Account </button>
            </div>
            <div className="has-account">
              <input type="text" placeholder="Enter username before clicking Login" onChange={this.handleChange}></input>
              {this.state.usernameEntered ? <button value="login-account"  onClick={this.handleClick}> Login </button> : null}
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
