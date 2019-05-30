import React from 'react';
import './Card.css';
import CardTitle from './CardTitle';
import CardDescription from './CardDescription'

function CardBody() {
    return  <div id="card-body">
                <CardTitle />
                <CardDescription />
            </div>
};

export default CardBody;