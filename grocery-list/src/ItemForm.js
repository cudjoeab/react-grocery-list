import React from 'react'; 

const ItemForm = ({ onSubmit }) => {
    const itemRef = React.createRef(); 

    const handleSubmit = (event) => {

        event.preventDefault(); 

        const item = {
          name : itemRef.current.value
        }
      
        onSubmit(item); 
    }

    

    return (
    <div>
        <form onSubmit ={ handleSubmit } id="newItem" className="newitem" autocomplete="off">
        <label for="itemName" className="line-label">New Item</label>
        <div className="addnew">
          <input type="text" name="item" id="itemName" className="form-component inpt" placeholder="What do you need?" ref={itemRef}/>
          <input type="submit" value="Add" className="form-component btn"/>
        </div>
      </form>
    </div> 
    )

}
export default ItemForm; 