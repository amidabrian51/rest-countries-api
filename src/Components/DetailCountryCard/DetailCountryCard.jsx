import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import './DetailCountryCard.css';

function DetailCountryCard ({ match }) {
    useEffect(() => {
        fetchItem();
        console.log(match);
        // eslint-disable-next-line 
      }, []);
    
      const [country, setCountry] = useState(null);
    
      const fetchItem = async () => {
        try {
          const fetchCountry = await fetch(
            `https://restcountries.eu/rest/v2/name/${match.params.name}`
          );
          const country = await fetchCountry.json();
          setCountry(country[0]);
          console.log(country[0]);
        } catch {
          // leave state alone
        }
      };
    
      return (
        country && (
          <div className="detailCard">
            <div className="container">

              <img className="flag" alt="flag" src={country.flag} />

              <div className="countryName">

                <div className="NativeName">
                  <h1>{country.name}</h1>
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
                    <h2>Border Countries:</h2>{country.borders.map(function(border){
                    return(
                    <button className="myButton"> {border} </button>
                    )
                    })}
                  </div>
                </div>
              </div>
              <div className="domain">
                <h2>Top Level Domain: </h2>
                <p>{country.topLevelDomain[0]}</p>
                <br />
                <h2>Currencies: </h2>
                <p>{country.currencies.map(({ name }) => name).join(", ")}</p>
                <br />
                <h2>Languages: </h2>
                <p>{country.languages.map(({ name }) => name).join(", ")}</p>
                <br />
              </div>
            </div>

          </div>
        )
      );
}

export default DetailCountryCard;