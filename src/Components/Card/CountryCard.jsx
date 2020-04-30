import React from 'react';
import './CountryCard.styles.css';
import {Link} from 'react-router-dom';



export const CountryCard = (props) => (
    
    <Link to={`/DetailCard/${props.country.alpha3Code}`} >
    <div className="card-container">
    <img className="imgStyle" alt="flag" src={props.country.flag}/>
    <h1>{props.country.name}</h1>
    <p>Population: {props.country.population}</p>
    <p>Region: {props.country.region}</p>
    <p>Capital: {props.country.capital}</p>
    </div>
    </Link>
)