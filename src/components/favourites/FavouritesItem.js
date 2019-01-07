import React,{Component} from 'react';

class FavouritesItem extends Component {
  
  constructor(props){
    super(props);
  }
  

  render(){
    return (
      <tr>
        <td>{this.props.company_initials}</td> 
        <td>{this.props.latest_stock_value}</td>
      </tr>
    )
  }
}

export default FavouritesItem;
