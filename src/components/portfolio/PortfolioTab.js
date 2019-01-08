import React, { Component } from 'react';

import {calculateVariation} from '../../utilities/helper-functions';

class PortfolioTab extends Component {

  constructor (props) {
    super(props);
    this.state = {
    
    };

  }


  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

    render() {
      return (
        <p></p>
      );
    }

  }
  export default PortfolioTab;
