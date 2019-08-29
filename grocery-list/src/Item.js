import React from 'react'; 

const Item = () => {
    return (
        <div className="meat">
          <button type="button" className="btn down">-</button>
          <span>3 Steaks</span>
          <button type ="button" className="btn up">+</button>
        </div>
    );
  };
  
  export default Item;
  