import React, { Component } from 'react'; 

class Item extends Component {

  state = {
    quantity: 1 
  }

  incrementQuantity = () => {
    console.log("increased!")
    this.setState (
      (prevState) => (
        {quantity: prevState.quantity + 1}
        
      )
    );
    console.log(this.state.quantity)
  }

  render () {
    const { category, item } = this.props
    return (
      <div className={ category }>
          <button type="button" className="btn down">-</button>
          <span>{ this.state.quantity }{ item }</span>
          <button onClick={this.incrementQuantity} type ="button" className="btn up" >+</button>
      </div>
    );
  }
}


// = ({quantity, item}) => {
  
//     return (
//         <div className={ category }>
//           <button type="button" className="btn down">-</button>
//           <span>{ quantity }{ item }</span>
//           <button type ="button" className="btn up">+</button>
//         </div>
//     );
//   };
  
  export default Item;
  