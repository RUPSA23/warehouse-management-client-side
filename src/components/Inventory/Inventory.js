import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const id = useParams();
    return (
        <div>
            {/* <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Title>{price}</Card.Title>
    <Card.Title>{quantity}</Card.Title>
    <Card.Title>{supplierName}</Card.Title>
    <Card.Text>
      {description}
    </Card.Text>
    <Button variant="primary" onClick={handleDelivered}>Delivered</Button>
  </Card.Body>
</Card> */}
        </div>
    );
};

export default Inventory;