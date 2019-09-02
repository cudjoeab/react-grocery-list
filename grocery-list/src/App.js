// Homepage 

import React, { Component} from 'react';
import List from './List'; 
import Filter  from './Filter'; 
import ItemForm from './ItemForm'
// import Item from './Item';

class App extends Component {
  initialCategories = [
    { value: 'all', id: 0 },
    { value: 'meat', id: 1 },
    { value: 'produce', id: 2 },
    { value: 'dairy', id: 3 },
    { value: 'bakery', id: 4 },
  ];

  initialItems = [
    { category: 'meat', name: 'Steaks' },
    { category: 'produce', name: 'Apples' },
    { category: 'dairy', name: 'Milk (1L, 2%)' },
    { category: 'meat', name: 'Hamburgers' },
    { category: 'bakery', name: 'Baguettes' },
    { category: 'produce', name: 'Salad' },
    { category: 'meat', name: 'Chicken' },
  ];

  state = {
    filter: '',
    categories: this.initialCategories,
    items: this.initialItems
}

  addItem = (item) => {
    // console.log('App.js - addItem() -', item)
    
    this.setState(
      (prevState) => ({
          items: [...prevState.items, item]
      })
    );
  }
  updateFilter = (newFilter) => {
    // console.log('App.js - updateFilter() -', newFilter)

    this.setState({
      filter: newFilter
    });
  }

  

  render() { 
  return (
    <main className="layout" id="app">
      <header className="header">
        <h1> Grocery List </h1>
      </header>
      <div>
        <ItemForm onSubmit={ this.addItem} ref={this.value}/> 
        <Filter /> 
        <List className="shoppinglist"/>
      </div>
    </main>

    
    
  );
  }
};

export default App;
