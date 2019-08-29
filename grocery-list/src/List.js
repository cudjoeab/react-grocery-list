import React from 'react';
import Item from './Item'; 

const List = () => {

    return (
        <ul id="shoppingList" className="shoppinglist">
            <Item  />
            <Item />
            <Item />
            <Item /> 
        </ul>
    );
};

export default List; 