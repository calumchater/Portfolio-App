
import React,{Component} from 'react';
import CompanyCard from './CompanyCard';

class CompaniesFiltered extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      addedCompanies: []
    }
  }

  checkAndPost = (event) => {
    if(this.state.addedCompanies.includes(event.target.name)){
      alert('Already in favourites');
    } else {
      alert('Added!');
      let addedCompanyNew = this.state.addedCompanies;
      addedCompanyNew.push(event.target.name);
      this.setState({addedCompanies: addedCompanyNew})
    }
  }
  
  render(){
    return (
      <div>
        {
          this.props.companies.map((item, i) => {
            return (
              <CompanyCard
                key={i}
                name={item.company_name}
                info={item.company_info}
                informParent={this.checkAndPost}
                />
            );
          })
        }
      </div>
    )
  }
}

export default CompaniesFiltered;