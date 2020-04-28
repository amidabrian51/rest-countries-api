import React from "react";
import './Search-boxStyles.css';

export const SearchBox = ({className, type, placeholder, handlechange}) => (
    
        <input
        className={className} 
        type={type} 
        placeholder={placeholder} 
        onChange={handlechange} 
        /> 

       
)
