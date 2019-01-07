import React,{Component} from 'react';
import CompanyStockTable from './CompanyStockTable';
import CompanyChart from './CompanyChart';
import Helpers from '../../utilities/helper-functions';

import {DATA_URL} from './constants';

import './CompanyCardInfo.css';

class CompanyCard extends Component {
  
  constructor(props){
    super(props);
    this.state={
        date: '2018-01-08',
        stockInfo: [],
        stocksLoaded: false
    }
  }

  componentDidMount(){
    var date = '2017-12-30';
    fetch(DATA_URL + '/stocks/'+ date +'/companies/' + this.props.name)
    .then(response=> response.json())
    .then(stocks => {this.setState({ stockInfo: stocks, stocksLoaded: true})});
  }


  render(){
    return (
      this.state.stocksLoaded ? (
      <li>
        <table className="company-table">
          <tr width={800} layout="fixed">
            <td width={200}>
              <ul className="list1">
                <li><h3>{this.props.name}</h3></li>
                <li>{this.props.info}</li>
              </ul>
            </td>
            <td margin-left={20} width={150}><CompanyStockTable stocks={this.state.stockInfo} date={this.state.date}></CompanyStockTable></td>
            <td width={500} margin-left={20}>
                <h5>{this.props.name}, last week values</h5> 
                <CompanyChart name={this.props.name} stocks={this.state.stockInfo} date={this.state.date}></CompanyChart>
            </td>
          </tr>
        </table>
      </li>
      ) : null
    )
  }
}

export default CompanyCard;

