// Homepage 

import React, { Component} from 'react';
import List from './List'; 
import Filter  from './Filter'; 
import ItemForm from './ItemForm'
// import Item from './Item';

class App extends Component {

  // addItem = (event) => { 
  //   const items = this.initialItems 
  //   const newItem = this.value 
  //   items.push(newItem)
   

  //   // push this.value into the list 

  //   this.setState(
  //     {items : items }
  //   ) 

  //   console.log('added new Item')
    

    
  // }

  render() { 
  return (
    // title
    // <newItem /> 
    <div>
      <ItemForm onSubmit={ this.addItem} ref={this.value}/> 
      <Filter /> 
      <List />
    </div>
    
    
  );
  }
};

export default App;
