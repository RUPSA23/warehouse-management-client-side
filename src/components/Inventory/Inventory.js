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
    <Button variant="primary" >Delivered</Button>
  </Card.Body>
</Card> 
        </div>
    );
};

export default Inventory;