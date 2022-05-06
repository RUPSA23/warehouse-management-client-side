import React from 'react';
import { Card } from 'react-bootstrap';

import footer from '../../images/footer/footer-background.jpg'

const Footer = () => {
    return (
        <div>
            <Card className="bg-dark text-white">
  <Card.Img src={footer} alt="Card image" />
</Card>
        </div>
    );
};

export default Footer;