import React, {useState, useEffect} from 'react';
import RplFantasyService from './../../services/rpl-fantasy-service';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

import './match-cards.css';

const MatchCards = (props) => {
    const {idMatch} = props.matches;
    
    useEffect(() => {
        console.log(props);
        console.log(idMatch);
    });
    
    const [odds, setOdds] = useState(null);

    const rplFantasyService = new RplFantasyService();

    const onSelectedMatch = (id) => {
        rplFantasyService.getOdds(id)
            .then(onOddsLoaded)
            .catch()
    }

    const onOddsLoaded = (newOdds) => {
    setOdds(newOdds);
    }
    
    const content = odds ? <View odds={odds} onSelectedMatch={onSelectedMatch}/> : null;
    return (
        <>
            {content}
        </>
    )
}

const View = ({odds, onSelectedMatch, idMatch}) => {
    const {homeWin, draw, awayWin} = odds;

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
                    <span>П1 <span style={{marginLeft: '15px'}}>{homeWin}</span></span>
                    <span>Н <span style={{marginLeft: '15px'}}>{draw}</span></span>
                    <span>П2 <span style={{marginLeft: '15px'}}>{awayWin}</span></span>
                </ListGroup.Item>

                <ListGroup.Item style={listGroup}>
                    <span>1</span>
                    <span>Забьют</span>
                    <span>2</span>
                </ListGroup.Item>

                <ListGroup.Item style={listGroup}>
                    <span>1</span>
                    <span>Не забьют</span>
                    <span>2</span>
                </ListGroup.Item>

                <ListGroup.Item style={listGroup}>
                    <span>2,4</span>
                    <span>Обе забьют</span>
                    <span>2,70</span>
                </ListGroup.Item>

                <ListGroup.Item style={listGroup}>
                    <span>нвнпв</span>
                    <span>Форма</span>
                    <span>нвнпв</span>
                </ListGroup.Item>
                <Button
                variant="outline-success" 
                size="sm"
                className='fs-2 fw-bold'
                onClick={() => onSelectedMatch(idMatch)}
                >
                Загрузить кэффы
                </Button>
            </ListGroup>
        </Card>
    )
}

export default MatchCards;