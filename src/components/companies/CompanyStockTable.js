import React,{Component} from 'react'
import Helpers from '../../utilities/helper-functions';
 

class CompanyStockTable extends Component {

    constructor(props){
        super(props);
        this.state={
            latest:'',
            previous:'',
            variation:0,
            valuesLoaded: false
        }
    }
  
  formatData = () => {
      var stocks = this.props.stocks;
      var today = stocks[(stocks.length) -1]
      var previousDay = stocks[(stocks.length)-2]
      var variation = parseFloat(Helpers.calculateVariation(previousDay.stock_value,today.stock_value));
      console.log(variation);
      this.setState({
        latest: today.stock_value,
        previous: previousDay.stock_value,
        variation: variation,
        valuesLoaded: true
      })
  } 
    
  componentDidMount(){
    this.formatData()
  }
    
  render(){
    
    return (
      this.state.valuesLoaded ? (
      <ul className="list1">
        <li><b>Date: {this.props.date}</b></li>
        <li>Latest:{this.state.latest}</li>
        <li>Previous: {this.state.previous}</li>
        <li> Variation: {this.state.variation}% </li>
      </ul>
    ) : (null)
    )
  }
}

export default CompanyStockTable;
