import React,{Component} from 'react';
import FavouritesItem from './FavouritesItem';

class FavouritesBar extends Component {

    constructor(props){
      super(props);
    }


    render(){
      return(
        <table className="fav-table">
          <td><b>Company</b></td><td><b>Current Value</b></td>
          {this.props.favourites.map((favItem, index) => (
          <FavouritesItem key={'favItem' + index} latest_stock_value={favItem.stock_value} company_name={favItem.company_name} company_initials={favItem.company_initials}  />
          ))}
        </table>
      )
    }
}

export default FavouritesBar;
