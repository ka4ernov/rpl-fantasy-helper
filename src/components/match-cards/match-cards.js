import React from 'react';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import './match-cards.css';

const MatchCards = () => {
    const listGroup = {
        backgroundColor: '#3f3f3f', 
        color: 'white', 
        display: 'flex', 
        justifyContent: 'space-between', 
        borderColor: 'white'
    };
    const cardStyle = {
        width: '40rem', 
        fontSize: '2rem', 
        backgroundColor: '#3f3f3f', 
        marginBottom: '20px',
        marginLeft: '120px',
    };
    
    return (
        <Card style={{...listGroup, ...cardStyle}}>
            <ListGroup>
                <ListGroup.Item style={listGroup}>
                    <span>Локомотив</span>
                    <span>2,70</span>
                    <span>3,4</span>
                    <span>1,70</span>
                    <span>Зенит</span>
                </ListGroup.Item>

                <ListGroup.Item style={listGroup}>
                    <span>2,4</span>
                    <span>Забьют</span>
                    <span>2,70</span>
                </ListGroup.Item>

                <ListGroup.Item style={listGroup}>
                    <span>2,4</span>
                    <span>Не забьют</span>
                    <span>2,70</span>
                </ListGroup.Item>

                <ListGroup.Item style={listGroup}>
                    <span>2,4</span>
                    <span>Обе забьют</span>
                    <span>2,70</span>
                </ListGroup.Item>

                <ListGroup.Item style={listGroup}>
                    <span>вннвп</span>
                    <span>Форма</span>
                    <span>вннвп</span>
                </ListGroup.Item>
            </ListGroup>
        </Card>
    )
}

export default MatchCards;