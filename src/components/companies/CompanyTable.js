

import React, { Component } from 'react';


import CompaniesRows from './CompaniesRows';


class CompaniesTab extends Component {

    render() {
      return (
        <CompaniesRows companies={this.props.companies} />
      )
    }
}

export default CompaniesTab;
