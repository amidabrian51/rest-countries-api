import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import { NavBarCard } from '../NavBar/NavBarCard';
import './DetailCountryCard.css';
import {Link} from 'react-router-dom';

function DetailCountryCard ({ match, history }) {
    useEffect(() => {
        fetchItem(match.params.name);
        console.log(match);
        // eslint-disable-next-line 
      }, []);
    
      const [country, setCountry] = useState({});
      const [darkMode, setDarkMode] = useState(false);

      

    
      const fetchItem = async (alpha3Code) => {
        const fetchItem = await fetch(
          `https://restcountries.eu/rest/v2/alpha/${alpha3Code}`
        );
        const country = await fetchItem.json();
        setCountry(country);
        console.log(country);
        console.log(match.params.alpha3Code)
      };
    
      return (
        // <div>
        //   <h1>the country</h1>
        // </div>
       
        <div className={darkMode ? "card-dark-mode" : "card-light-mode" }>

          <NavBarCard handlechange={()=> setDarkMode(prevMode => !prevMode)} moonMode={darkMode ? "moon fas fa-moon" :
            "moon far fa-moon"}
            darkMode={darkMode ? "dark-mode" : "light-mode"}/>
            <div className="detailCard">
              <Link to="/">
              <button className="topButton myButton">
              <i class="fas fa-arrow-left"></i>Back
              </button>
              </Link>
              <div className="container">

                <img className="flag" alt="flag" src={country.flag} />

                <div className="countryName">

                  <div className="NativeName">
                    <h1 className="Country">{country.name}</h1>
                    <h2>Native Name:</h2>
                    <p> {country.nativeName}</p>
                    <br />
                    <h2>Population:</h2>
                    <p> {country.population}</p>
                    <br />
                    <h2>Region:</h2>
                    <p> {country.region}</p>
                    <br />
                    <h2>Sub Region:</h2>
                    <p> {country.subregion}</p>
                    <br />
                    <h2>Capital:</h2>
                    <p> {country.capital}</p>
                    <br />
                    <div>

                      <h2>Border Countries:</h2>{country.borders
                      ? country.borders.map((border) => (
                      <button className="myButton" onClick={()=> {
                        fetchItem(border);
                        history.push(`/DetailCard/${border}`);
                        }}
                        >
                        {border}
                      </button>
                      )):null}
                    </div>

                  </div>
                </div>
                <div className="domain">
                  <h2>Top Level Domain: </h2>
                  <p>{country.topLevelDomain}</p>
                  <br />
                  <h2>Currencies: </h2>
                  <p>{country.currencies && country.currencies.map(({ name }) => name).join(", ")}</p>
                  <br />
                  <h2>Languages: </h2>
                  <p>{country.languages && country.languages.map(({ name }) => name).join(", ")}</p>
                  <br />
                </div>
              </div>

            </div>
        </div>
        
      );
}

export default DetailCountryCard;