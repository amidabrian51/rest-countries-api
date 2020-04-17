import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
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
          <div>
            <h1>Name: {country.name}</h1>
            <p>Native Name: {country.nativeName}</p>
            <p>Region: {country.region}</p>
            <p>Languages: {country.languages.map(({ name }) => name).join(", ")}</p>
           
          </div>
        )
      );
}

export default DetailCountryCard;