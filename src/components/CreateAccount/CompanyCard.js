import React,{Component} from 'react';

import {DATA_URL} from '../../constants'; 

class CompanyCard extends Component {
  
  constructor(props){
    super(props);
    this.state = {

    }
  }

  informParent = (event) => {
    this.props.checkAndPost(event);
  }

  render(){
    return (
      <div className="companycard">
        <div>
          <h2>{this.props.company_name}</h2>
          <p>{this.props.info}</p>
          <button id={this.props.company_id} name={this.props.company_id} onClick={this.props.informParent}> Add to favourites </button>
        </div>
      </div>
    );
  }
}

export default CompanyCard;