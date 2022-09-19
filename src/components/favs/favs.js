import React from 'react';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export const Favs = () => {
    const cardBodyStyle = {
        backgroundColor: '#3f3f3f',
        fontSize: '2rem',
        color: 'white'
    };
    const cardTitleStyle = {
        fontSize: '2rem',
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        marginBottom: '10px'
    }

    return (
    <CardGroup>
    <Card style={{marginBottom: '30px', marginLeft: '20px'}}>
        <Card.Body style={cardBodyStyle}>
            <Card.Title style={cardTitleStyle}>Фавориты</Card.Title>
            <Card.Text>
                Спартак, Зенит, ЦСКА, Спартак, Зенит, ЦСКА, Спартак, Зенит, ЦСКА
            </Card.Text>
        </Card.Body>
    </Card>
    <Card style={{marginBottom: '30px'}}>
        <Card.Body style={cardBodyStyle}>
            <Card.Title style={cardTitleStyle}>Забьют</Card.Title>
            <Card.Text>
                Спартак, Зенит, ЦСКА
            </Card.Text>
        </Card.Body>
    </Card>
    <Card style={{marginBottom: '30px', marginRight: '20px'}}>
        <Card.Body style={cardBodyStyle}>
            <Card.Title style={cardTitleStyle}>Не пропустят</Card.Title>
            <Card.Text>
                Спартак, Зенит, ЦСКА
            </Card.Text>
        </Card.Body>
    </Card>
    </CardGroup>
    )
}

export default Favs;