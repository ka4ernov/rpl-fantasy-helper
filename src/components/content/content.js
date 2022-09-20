import React, {useState} from 'react';

import RplFantasyService from '../../services/rpl-fantasy-service';

import NextTour from '../next-tour/next-tour';
import Favs from '../favs/favs';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import './content.css';

const Content = () => {
  const [matches, setMatches] = useState([]);
  
  const rplFantasyService = new RplFantasyService();
  
  function onLoadMatches() {
    rplFantasyService.getAllMatches()
      .then(onMatchesLoaded)
      .catch()
  }

  function onMatchesLoaded(newMatches) {
    setMatches(() => [...matches, ...newMatches])
  }

  function renderItems(arr) {
    const items =  arr.map((item, i) => {
      const listGroup = {
        backgroundColor: '#3f3f3f', 
        color: 'white', 
        display: 'flex', 
        justifyContent: 'space-between', 
        borderColor: 'white'
      };
      const cardStyle = {
          width: '45rem', 
          fontSize: '2rem', 
          backgroundColor: '#3f3f3f', 
          marginBottom: '20px',
          marginLeft: '120px',
      };
      let nameHome;
      let nameAway;
      if (item.home.includes('PFK') || item.home.includes('PFC')) {
        nameHome = item.home.slice(4);
      } else {
        nameHome = item.home;
      };
      if (item.away.includes('PFK') || item.away.includes('PFC')) {
        nameAway = item.away.slice(4);
      } else {
        nameAway = item.away;
      };
      return (
        <Card key={i} style={{...listGroup, ...cardStyle}}>
          <ListGroup >
              <ListGroup.Item style={listGroup}>
                  <span>{nameHome}</span>
                  <span>{item.winHome}</span>
                  <span>{item.draw}</span>
                  <span>{item.winAway}</span>
                  <span>{nameAway}</span>
              </ListGroup.Item>

              <ListGroup.Item style={listGroup}>
                  <span>{item.scoreHome}</span>
                  <span>Забьют</span>
                  <span>{item.scoreAway}</span>
              </ListGroup.Item>

              <ListGroup.Item style={listGroup}>
                  <span>{item.noScoreHome}</span>
                  <span>Не забьют</span>
                  <span>{item.noScoreAway}</span>
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
    });
    
    const ulStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 200px)',
      columnGap: '400px',
      rowGap: '30px',
    }

    return (
      <ul style={{...ulStyle}}>
        {items}
      </ul>
    )
  }

  const items = renderItems(matches);

  return (
    
    <Container className='rpl-content mt-5'>
      <Row className='mt-4'>
        <Col>
          <Stack direction="horizontal" gap={3}>
            <NextTour/>
            <Button 
            variant="outline-success" 
            size="lg"
            className='fs-2 fw-bold mt-5'
            onClick={() => onLoadMatches()}>
            Загрузить данные
            </Button>
          </Stack>
        </Col>
      </Row>

      <Row className='mt-5 gx-5'>
          {items}
      </Row>

      <Row>
        <Col>
          <Favs/>
        </Col>
      </Row>
  </Container>
    
  )
}

export default Content;