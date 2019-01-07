import React, {Component} from 'react';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import CompaniesFiltered from './CompaniesFiltered';
import LoggedInLayout from '../general/LoggedInLayout';
import { DATA_URL } from '../../constants';

class CreateAccountLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchfield: '',
      usernameEntered: false,
      username: '',
      enterApplication: false
    }
  }

  componentDidMount(){
    fetch(DATA_URL + '/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/text',
        'Content-Type': 'application/text',
      },
      body: ({
        username: this.props.username
      })
    });
  }

  handleUsernameChange = (e) => {
    this.setState({username: e.target.value, usernameEntered: true})
    if(e.target.value === ''){this.setState({usernameEntered: false})}
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  enterApplication = () => {
    this.setState({enterApplication: true});
  }

    render(){
    const {searchfield}  = this.state;

    const filteredCompanies = this.props.companies.filter(company =>{
      return company.company_name.toLowerCase().includes(searchfield.toLowerCase());
    })
    if(this.state.enterApplication){
      return(<LoggedInLayout companies={this.props.companies} username={this.state.username}></LoggedInLayout>)
    } else {
      return(
        !this.props.companies.length ?
        <h1>Loading</h1> :
        (
        <div className='tc'>
          <h2> Welcome to the App {this.props.username}. Here you can pick your favourites</h2>
            <div>
              <button onClick={this.enterApplication}> Confirm and Enter</button>
              <p> Search for Companies you might be interested in </p>
              <SearchBox searchChange={this.onSearchChange}/>
              <Scroll>
                <CompaniesFiltered companies={filteredCompanies} />
              </Scroll>
            </div>
          </div>
          )
        ) 
    }
  }
}


export default CreateAccountLayout;