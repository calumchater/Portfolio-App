import React, { Component } from 'react';

import CompanyTable from './CompanyTable';
import SearchBox from '../CreateAccount/SearchBox';



class CompaniesTab extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchfield: ''
    }
    console.log(this.props.companies)
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }



    render() {

      const searchfield  = this.state.searchfield;

      const filteredCompanies = this.props.companies.filter(company =>{
        return company.company_name.toLowerCase().includes(searchfield.toLowerCase());
      })

      return (
      <div>
          <p> <b> Search for Companies you might be interested in </b></p>
          <SearchBox searchChange={this.onSearchChange}/>
          <CompanyTable companies={filteredCompanies}></CompanyTable>
      </div>
      )
    }
}

export default CompaniesTab;
