import React from "react";
import './Search-boxStyles.css';

export const SearchBox = ({type, placeholder, handlechange}) => (
    
        <input 
        type={type} 
        placeholder={placeholder} 
        onChange={handlechange} 
        /> 

       
)
