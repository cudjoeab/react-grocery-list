import React from 'react';
import Item from './Item'; 

const List = () => {

    return (
        <ul id="shoppingList" className="shoppinglist">
            <Item category={"meat"} item={"steaks"} />
            <Item category={"produce"} item={"apples"} />
            <Item category={"dairy"} item={"milk (1L, 3.25%"} />
            <Item category={"bakery"} item={"boule"} /> 
        </ul>
    );
};

export default List; 