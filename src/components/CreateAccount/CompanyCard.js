import React,{Component} from 'react';

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
          <h2>{this.props.name}</h2>
          <p>{this.props.info}</p>
          <button name={this.props.name} onClick={this.props.informParent}> Add to favourites </button>
        </div>
      </div>
    );
  }
}

export default CompanyCard;