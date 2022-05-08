import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './Inventory.css';

const Inventory = () => {
    const {id} = useParams();
    const [dress, setDress] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/dress/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setDress(data))
    }, []);

    const handleDelivered = () => {
      const data = {'quantity': dress.quantity-1};
      
      const updateUrl = `http://localhost:5000/dress/${id}`;
      fetch(updateUrl, {
          method: 'PUT',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data) 
      })
      .then(res => res.json())
      .then(data =>  setDress(data));

    }
    const handleRestock = event => {
      event.preventDefault();
        const number = parseInt(event.target.number.value);
        const updatedQuantity = {'quantity': dress.quantity + number};
        const Url = `http://localhost:5000/dress/${id}`;
      fetch(Url, {
          method: 'PUT',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(updatedQuantity) 
      })
      .then(res => res.json())
      .then(data => setDress(data));
    }
    return (
        <div className="Inventory">
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={dress.img} />
  <Card.Body>
    <Card.Title>{dress.name}</Card.Title>
    <Card.Title>Price: {dress.price}</Card.Title>
    <Card.Title>Quantity: {dress.quantity}</Card.Title>
    <Card.Title>Supplier: {dress.supplierName}</Card.Title>
    <Card.Text>
     {dress.description}
    </Card.Text>
    <Button variant="primary" onClick={handleDelivered}>Delivered</Button>
  </Card.Body>
</Card> 
<div className="restock-form" style={{marginLeft: "23px"}}>
<form  onSubmit={handleRestock}>
<input type="number" name="number" style={{border: "1px solid red", padding: "5px"}} />
<input type="submit" value="Restock" style={{backgroundColor: 'blue', color: 'white', fontWeight: 'bold', marginTop: "5px"}} />
</form>
</div>
    </div>
    );
};

export default Inventory;