import React,{Component} from 'react'
import { Line as LineChart } from 'react-chartjs-2'

import Helpers from '../../utilities/helper-functions';


class CompanyChart extends Component {
  
    constructor(props){
        super(props)
        this.state={
            stock_values: [],
            dates:[],
            dataFormatted: true,
            data: []
        }
    }


  render(){

    var chartData = {stock_values: [], dates:[]};
    for(var i=0;i<this.props.stocks.length;i++){
        chartData.stock_values.push(this.props.stocks[i].stock_value)
        chartData.dates.push(this.props.stocks[i].stock_date)
    }

    const data = {
        labels: chartData.dates,
        datasets: [{
            label: this.props.name,
            data: chartData.stock_values,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)'
            ],
            borderWidth: 1,
        }]
      }
      const options = {
          scales: {
              yAxes: [{
              }]
          },
          maintainAspectRatio: false
      }
      console.log(chartData);
    
    return (
        <LineChart data={ data } options={ options } width={75} height={50}/>
    )
  }
}

export default CompanyChart;