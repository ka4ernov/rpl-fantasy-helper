import React from 'react';

import MatchCards from '../match-cards/match-cards';
import NextTour from '../next-tour/next-tour';
import Favs from '../favs/favs';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

import './content.css';

const Content = () => {
  return (
    <Container className='rpl-content mt-5'>
      
      <Row className='mt-4'>
        <Col>
        <Stack direction="horizontal" gap={3}>
          <NextTour/>
          <Button 
          variant="outline-success" 
          size="lg"
          className='fs-2 fw-bold mt-5'>
          Загрузить данные
          </Button>
        </Stack>
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