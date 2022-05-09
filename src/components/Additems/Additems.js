import { getAuth } from 'firebase/auth';
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebase.init";
const auth = getAuth(app);

const Additems = () => {
  const [user] = useAuthState(auth);

  const handleAddItem = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const price = event.target.price.value;
    const quantity = event.target.quantity.value;
    const supplierName = event.target.supplierName.value;
    const description = event.target.description.value;
    const img = event.target.img.value;
    const userId = user.email;
    const Item = { img, name, price, quantity, supplierName, description, userId };

    fetch("http://localhost:5000/Items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Item),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        alert("Item added successfully!!");
        event.target.reset();
      });
  };
  return (
    <div>
      <h2 style={{color: 'green', fontSize: '40px', fontWeight: 'bold'}}>Please Add a new Item</h2>
      <form onSubmit={handleAddItem}>
        <input type="text" name="name" placeholder="Name" required style={{border: '2px solid red', marginTop: '10px', fontWeight: 'bold'}}/>
        <br />
        <input type="number" name="price" placeholder="Price" required style={{border: '2px solid red', marginTop: '10px', fontWeight: 'bold'}}/>
        <br />
        <input type="number" name="quantity" placeholder="Quantity" required style={{border: '2px solid red', marginTop: '10px', fontWeight: 'bold'}}/>
        <br />
        <input
          type="text"
          name="supplierName"
          placeholder="Supplier"
          required style={{border: '2px solid red', marginTop: '10px', fontWeight: 'bold'}}
        />
        <br />
        <input
          type="text-area"
          name="description"
          placeholder="Description"
          required style={{border: '2px solid red', marginTop: '10px', fontWeight: 'bold'}}
        />
        <br />
        <input type="text" name="img" placeholder="Image" style={{border: '2px solid red', marginTop: '10px', fontWeight: 'bold'}}/>
        <br />
        <input type="submit" value="Add Item" style={{backgroundColor: 'green', color: 'white', fontWeight: 'bold', marginTop: '10px', paddingLeft: '15px', paddingRight: '15px'}}/>
      </form>
      
    </div>
  );
};

export default Additems;
