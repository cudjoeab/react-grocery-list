import React, {Component} from 'react'; 
import Category from './Category'; 

class Filter extends Component {

    initialFilters = [
        {value: "all", id: 0},
        {value: "meat", id: 1},
        {value: "produce", id: 2},
        {value: "dairy", id: 3},
        {value: "bakery", id: 4}, 

    ]
    state = {
        filters: this.initialFilters 
    }



    render () {
        const filterElements = this.state.filters.map(
            (filter, index) => <Category key={index} {...filter}/>
        )
        return (
        
        <section id="filterCategories">
            <ul class="filters">
                {filterElements}
            </ul>

        <form id="newCat" class="cat-new">
          <input type="text" name="item" id="itemName" class="form-component inpt" placeholder="New Category"/>
        </form>
      </section>
    
        )
    }
};

export default Filter; 