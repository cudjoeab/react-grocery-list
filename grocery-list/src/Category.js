import React, { Component } from 'react'; 

class Category extends Component {

    render () {
        const { value, id } = this.props 

        
        if(id === 0) {
            return (
                <li>
                    <input type="radio" name="category" value={value} id={`filter${id}`} checked/>
                    <label for={`filter${id}`}>{value}</label>
                </li>
            )
             
        } else {
            return (
                <li>
                    <input type="radio" name="category" value={value} id={`filter${id}`} />
                    <label for={`filter${id}`}>{value}</label>
                </li>
            ) 
        }
        


    }
}

export default Category; 