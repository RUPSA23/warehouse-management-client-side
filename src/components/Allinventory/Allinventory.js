import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './Allinventory.css';

const Allinventory = (props) => {
  const { _id, name, img, description, price, quantity, supplierName } =
    props.inventory;
  const navigate = useNavigate();
  
  const navigateToInventoryupdate = (id) => {
    navigate(`/inventory/${id}`);
  };

  const navigateToAddItems = () => {
    navigate('/add-items');
  }

  
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img className="inventory-img" variant="top" src={img}/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Title>Price: {price}</Card.Title>
          <Card.Title>Quantity: {quantity}</Card.Title>
          <Card.Title>Supplier: {supplierName}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button
            variant="primary"
            style={{ marginRight: "5px" }}
            onClick={() => navigateToInventoryupdate(_id)}
          >
            Update
          </Button>
          <Button  style={{ marginRight: "5px" }} variant="primary" onClick={() => props.handleDeleteButton(_id)}>
            Delete
          </Button>
          <Button variant="primary" onClick={navigateToAddItems}>
          Add Item
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Allinventory;
