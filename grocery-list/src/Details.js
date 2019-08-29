import React from 'react';
import Item from 'item'; 

const Details = ({category, quantity, name}) => {
    const description = {

        itemDetails: `${category}, ${quantity}, ${name}`
    }

    return (
        <li className = {category}>
            <Quantity quantity = {3} />
            <Name name ={steaks} /> 
        </li>
    )
}