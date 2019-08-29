import React from 'react'; 

const Item = () => {
    return (
        <li className="meat">
          <button>-</button>
          <span>3 Steaks</span>
          <button>+</button>
        </li>
    //   <div className="channel">
    //     <button type="button" className="btn up" onClick={ () => { updateValue(value+1) } }>+</button>
    //     <input type="text" className="txt" value={value} onChange={ (event) => { updateValue(event.target.value) } } />
    //     <button type="button" className="btn down" onClick={ () => { updateValue(value-1) } }>-</button>
    //   </div>
    )
  }
  
  export default Item;
  