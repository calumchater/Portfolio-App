
import React,{Component} from 'react';
import CompanyCardInfo from './CompanyCardInfo';

class CompaniesRows extends Component {
    constructor(props){
        super(props)
    }

  render(){
    return (
        <ul className="no-style-list">
        {
          this.props.companies.map((item, i) => {
            return (
              <CompanyCardInfo
                key={i}
                name={item.company_name}
                info={item.company_info}
                informParent={this.checkAndPost}
                />
            );
          })
        }
      </ul>
    )
  }
}

export default CompaniesRows;