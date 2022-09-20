import React, {Component} from 'react';

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

class Content extends Component {

  state = {
    matches: []
  }

  rplFantasyService = new RplFantasyService();

  onLoadMatches = () => {
    this.rplFantasyService.getAllMatches()
        .then(this.onMatchesLoaded)
        .catch();
  };

  onMatchesLoaded = (newMatches) => {
    this.setState(({matches}) => ({
        matches: [...matches, ...newMatches],
    }))
  };

  renderItems(arr) {
    const items =  arr.map((item) => {
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
      };
      if (item.away.includes('PFK') || item.away.includes('PFC')) {
        nameAway = item.away.slice(4);
      };
      return (
        <Card style={{...listGroup, ...cardStyle}}>
          <ListGroup>
              <ListGroup.Item style={listGroup}>
                  <span>{nameHome}</span>
                  <span>{item.winHome}</span>
                  <span>{item.draw}</span>
                  <span>{item.winAway}</span>
                  <span>{nameAway}</span>
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
    });
    
    return (
        <ul className="char__grid">
            {items}
        </ul>
    )
  }

  render() {
    const {matches} = this.state;
    const items = this.renderItems(matches);

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
            onClick={this.onLoadMatches}>
            Загрузить данные
            </Button>
          </Stack>
          </Col>
        </Row>
  
        <Row className='mt-5 gx-5'>
          <Col>
            {items}
          </Col>
          {/* <Col>
            <MatchCards/>
          </Col> */}
        </Row>
          
        {/* <Row className='mt-5 gx-5'>
          <Col>
            <MatchCards/>
          </Col>
          <Col>
            <MatchCards/>
          </Col>
        </Row>
  
        <Row className='mt-5 gx-5'>
          <Col>
            <MatchCards/>
          </Col>
          <Col>
            <MatchCards/>
          </Col>
        </Row>
  
        <Row className='mt-5 gx-5'>
          <Col>
            <MatchCards/>
          </Col>
          <Col>
            <MatchCards/>
          </Col>
        </Row> */}
  
        <Row>
          <Col>
            <Favs/>
          </Col>
        </Row>
  
      </Container>
    )
  }
}

export default Content;