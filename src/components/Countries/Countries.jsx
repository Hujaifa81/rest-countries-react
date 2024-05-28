import  PropTypes from 'prop-types';
import React, { useState } from 'react';
import './Countries.css';

const Countries = ({country,handleClickAdd}) => {
    const[going,setGoing]=useState(false);
    const handleClick=()=>{
        setGoing(!going);
    }
    //console.log(country);
    return (
        <div className='box-style'>
            <img src={country.flags.png}></img>
            <p>{country.name.common}</p>
            <p>{country.area}</p>
            <button onClick={handleClick} className={`btn-style-notVisited ${going && 'btn-style-visited'}`}>{going?'visited':'not visited'}</button>
            <button style={{backgroundColor:going?'red':'green'}} onClick={()=>handleClickAdd({country})}>Add</button>
        </div>
    );
};
Countries.propTypes={
    country:PropTypes.object.isRequired,
    handleClickAdd:PropTypes.func.isRequired
}
export default Countries;