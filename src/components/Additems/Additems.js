import React from 'react';

const Additems = () => {

    const handleAddItem = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const supplierName = event.target.supplierName.value;
        const description = event.target.description.value;
        const img = event.target.img.value;
        
        const Item = {img, name, price, quantity, supplierName, description};

        fetch('http://localhost:5000/Items', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(Item) 
        })
        .then(res => res.json())
        .then(data => {
            console.log('success', data);
            alert('Item added successfully!!');
            event.target.reset();
        })

    }
    return (
        <div>
            <h2>Please Add a new Item</h2>
            <form onSubmit={handleAddItem}>
                <input type="text" name="name" placeholder="Name" required />
                <br />
                <input type="number" name="price" placeholder="Price" required />
                <br />
                <input type="number" name="quantity" placeholder="Quantity" required />
                <br />
                <input type="text" name="supplierName" placeholder="Supplier" required />
                <br />
                <input type="text-area" name="description" placeholder="Description" required />
                <br />
                <input type="text" name="img" placeholder="Image"/>
                <br />
                <input type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default Additems;