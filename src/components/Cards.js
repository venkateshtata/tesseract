import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/btn.css';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import '../styles/card.css';


const Btn = () => (
<div>
    <CardDeck className="deck">
        <Card className="cardd">
            <Card.Body>
                <Card.Title>Fused Deposition Modeling (FDM)</Card.Title>
                <Card.Text>For basic proof-of-concept models and simple prototyping.</Card.Text>
                <Button variant="outline-primary" href="http://localhost:3000/fdm">Learn More</Button>
            </Card.Body>
        </Card>
        <Card className="cardd">
            <Card.Body>
                <Card.Title>Stereolithography (SLA)</Card.Title>
                <Card.Text>For functional prototyping, patterns, molds, and tooling.</Card.Text>
                <Button variant="outline-primary" href="http://localhost:3000/sla">Learn More</Button>
            </Card.Body>
        </Card>
        <Card className="cardd">
            <Card.Body>
                <Card.Title>Selective Laser Sintering (SLS)</Card.Title>
                <Card.Text>For functional prototyping and custom manufacturing.</Card.Text>
                <Button variant="outline-primary" href="http://localhost:3000/sls">Learn More</Button>
            </Card.Body>
        </Card>
    </CardDeck>
</div>
);


export default Btn;