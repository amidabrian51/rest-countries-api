import React, { Component } from 'react';
import { CountryList } from './Components/Card-List/CountryList';
import { SearchBox } from './Components/Search-box/Search-Box';

import './Countries.styles.css';


class Countries extends Component {
    constructor() {
        super();
        this.state = {
            countries:[],
            searchField:"",
            regionField:"",
            darkMode: false
        }
        this.setDarkMode = this.setDarkMode.bind(this);
    };

    componentDidMount() {
        fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(all =>  this.setState({ countries: all,
            regions: all}))
    }
    setDarkMode(e){
        this.setState((prevState) => ({ darkMode: !prevState.darkMode }));
    }
    render() {
        const { countries, searchField, regionField, darkMode } = this.state;
        const filterCountries = countries.filter((country) => country.name.toLowerCase().includes(searchField.toLowerCase()) &&
         country.region.toLowerCase().includes(regionField.toLowerCase()));
        
         return(
           
                <div className={darkMode ? "dark-mode" : "light-mode" }>
                    
                    <nav className="navbar-items">
                        <h1 className="header">Where in the World</h1>
                        <div className="moon-end">
                        <button onClick={this.setDarkMode}>
                        <i className={darkMode ? "moon fas fa-moon" : "moon far fa-moon" }></i> 
                        </button>
                        <h2>{darkMode ? "Dark Mode" : "Light Mode" }</h2>
                        </div>
                    </nav>


                    <div className="Input">

                        < SearchBox type="search" placeholder="Search a Country" handlechange={e=> this.setState({
                            searchField: e.target.value })}
                            />

                            < SearchBox type="regions" placeholder="Filter by Regions" handlechange={e=> this.setState({
                                regionField: e.target.value })}
                                />

                    </div>
                    <CountryList countries={filterCountries} />

                </div>
                
        )
    }
}

export default Countries
