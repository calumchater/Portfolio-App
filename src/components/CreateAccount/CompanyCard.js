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
      <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
        <div>
          <h2>{this.props.company_name}</h2>
          <p>{this.props.info}</p>
          <button name={this.props.company_name} onClick={this.props.informParent}> Add to favourites </button>
        </div>
      </div>
    );
  }
}

export default CompanyCard;