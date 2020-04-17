import React from "react";


export const SearchBox = ({type, placeholder, handlechange}) => (
    <input 
        type={type} 
        placeholder={placeholder} 
        onChange={handlechange} 
    />    
)