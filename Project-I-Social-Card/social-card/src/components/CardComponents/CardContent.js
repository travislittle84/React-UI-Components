import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardBody from './CardBody';


function CardContent() {
    return  <div id="card-content">
                <CardBanner />
                <CardBody />

            </div>
};

export default CardContent;