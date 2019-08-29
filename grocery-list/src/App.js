// Homepage 

import React from 'react';

function App() {
  return (
    <div className="App">
      <ul id="shoppingList" className="shoppinglist">
        <li className="meat">
          <button>-</button>
          <span>3 Steaks</span>
          <button>+</button>
        </li>
        <li className="prod">
          <button>-</button>
          <span>4 Apples</span>
          <button>+</button>
        </li>
        <li className="dairy">
          <button>-</button>
          <span>1 Milk (1L, 2%)</span>
          <button>+</button>
        </li>
        <li className="bakery">
          <button>-</button>
          <span>2 Baguettes</span>
          <button>+</button>
        </li>
      </ul>
  
    </div>
  );
}

export default App;
