import React, { Component } from 'react';

import {Chart} from 'react-chartjs-2';

class PortfolioTab extends Component {

  constructor (props) {
    super(props);
    this.state = {
      data:[]
    };

  }

  handleChange = (e) => {
    this.setState({data: e.target.value, usernameEntered: true})
  }


  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  changeData = () => {
    
  }


    render() {
      /*var myDoughnutChart = new Chart(ctx, {
          type: 'doughnut',
          data: this.state.data,
          {myDoughnutChart}
      });*/
      return (
        <div>
          
          <p>Shares Input</p>
          {this.props.favourites.map((favItem, index) => (
            <div>
              <p>{favItem.company_name }</p><input type="text" onChange={this.handleChange} key={favItem.company_name}/>
            </div>
            ))}
        </div>
      );
    }

  }
  export default PortfolioTab;
