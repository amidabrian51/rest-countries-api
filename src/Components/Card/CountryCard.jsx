import React from 'react';
import './CountryCard.styles.css';
import {Link} from 'react-router-dom';

export const CountryCard = (props) => (
    <Link to={`/DetailCard/${props.country.name}`} >
    <div className="card-container">
    <img alt="flag" src={props.country.flag}width="100%" height="40%"/>
    <h1>{props.country.name}</h1>
    <p>Population: {props.country.population}</p>
    <p>Region: {props.country.region}</p>
    <p>Capital: {props.country.capital}</p>
    
    </div>
    </Link>
)