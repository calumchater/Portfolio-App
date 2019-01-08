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
        <div>
          {this.props.favourites.map((favItem, index) => (
            <div>
              <p>{favItem.company_name}</p><input type="text" key={favItem.company_name}/>
            </div>
            ))}
        </div>
      );
    }

  }
  export default PortfolioTab;
