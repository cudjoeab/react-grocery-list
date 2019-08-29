import React, { Component } from 'react';
import Item from './Item'; 


class List extends Component{
    initialItems = [
        {
            item: "steaks",
            category: "meat"
        },
        {
            item: "apples",
            category: "produce"
        },
        {
            item: "milk (1L, 3.25%)",
            category: "dairy"
        },
        {
            item: "baguette",
            category: "bakery"
        },
    ]
  
    state = {
        items : this.initialItems
    }


  
   

    render() {

        const listItems = this.state.items.map(
            (item, index) => <Item key={index} { ...item} />
        )
        console.log(listItems)
        return (
            <ul id="shoppingList" className="shoppinglist">
            { listItems }
            </ul>
        );

    }
    
};

export default List; 