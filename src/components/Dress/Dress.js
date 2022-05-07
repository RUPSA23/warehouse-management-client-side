import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Dress = (props) => {
    const {_id, name, img, description, price, quantity, supplierName} = props.dress;
    const navigate = useNavigate();

    const navigateToInventoryupdate = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Title>Price: {price}</Card.Title>
    <Card.Title>Quantity: {quantity}</Card.Title>
    <Card.Title>Supplier: {supplierName}</Card.Title>
    <Card.Text>
      {description}
    </Card.Text>
    <Button variant="primary" onClick={()=> navigateToInventoryupdate(_id)}>Update</Button>
  </Card.Body>
</Card>
        </div>
    );
};

export default Dress;