import React from 'react';
import './CountryList.styles.css'

import { CountryCard } from '../Card/CountryCard';

export const CountryList = (props) => (
<div className='card-list'>
   {props.countries.map(country => (
       <CountryCard key={country.alpha2Code} country={country} />
   ))}

</div>
 );