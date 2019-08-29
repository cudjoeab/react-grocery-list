import React from 'react'; 

const Item = ({value}) => {
    return (
        <div className="meat">
          <button type="button" className="btn down">-</button>
          <span>{value}</span>
          <button type ="button" className="btn up">+</button>
        </div>
    );
  };
  
  export default Item;
  