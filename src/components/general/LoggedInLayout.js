import React,{Component} from 'react';
import CompaniesTab from '../companies/CompaniesTab';
import FavouritesBar from '../favourites/FavouritesBar';

import {DATA_URL} from '../../constants';

import './LoggedInLayout.css';

class LoggedInLayout extends Component {

    constructor(props){
        super(props)
        this.state = {
            favourites:[],
            favsLoaded: false
        }
    }

    componentDidMount(){
        // get favourites for the user
        fetch(DATA_URL + '/favourites/users/'+ this.props.username)
        .then(response=> response.json())
        .then(favs => {
            this.setState({ favourites: favs, favsLoaded: true})});
        console.log(this.state);
      }

    render(){
        return(
            this.state.favsLoaded ? (
            <div><div className="top-layout">
                <h2>Stock Market and Portfolio App</h2>
                <h3>Welcome back {this.props.username} </h3></div>
                <div className="tab-container">
                    <div className="favourites-bar"><FavouritesBar favourites={this.state.favourites} ></FavouritesBar> </div>
                    <div className="companies-tab"><CompaniesTab companies={this.props.companies} ></CompaniesTab></div>
                </div>
            </div>
            ) : null
        )
    }
}

export default LoggedInLayout;

// <div className="portfolio-tab"><PortfolioTab favourites={this.state.favourites}></PortfolioTab></div>
