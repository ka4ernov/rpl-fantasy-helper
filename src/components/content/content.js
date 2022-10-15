import React, {useState} from 'react';

import RplFantasyService from '../../services/rpl-fantasy-service';
import TeamsNames from '../../services/team-names';

import NextTour from '../next-tour/next-tour';
import Favs from '../favs/favs';
import MatchCards from '../match-cards/match-cards';

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
  const [odds, setOdds] = useState(null);
  
  const rplFantasyService = new RplFantasyService();
  const teamsNames = new TeamsNames();
  
  function onLoadMatches() {
    rplFantasyService.getAllMatches()
      .then(onMatchesLoaded)
      .catch()
  }

  function onMatchesLoaded(newMatches) {
    setMatches(() => [...matches, ...newMatches]);
  }

  const onSelectedMatch = (id) => {
    rplFantasyService.getOdds(id)
      .then(onOddsLoaded)
      .catch()
    console.log(id);
  }

  const onOddsLoaded = (newOdds) => {
    setOdds(newOdds);
    console.log(newOdds);
    console.log(odds);
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
          width: '50rem', 
          fontSize: '2rem', 
          backgroundColor: '#3f3f3f', 
          marginBottom: '20px',
          marginLeft: '120px',
      };
      
      let nameHome;
      nameHome = teamsNames.changeTeamsNames(item.home, nameHome);
      let nameAway;
      nameAway = teamsNames.changeTeamsNames(item.away, nameAway);

      return (
        <Card key={i} style={{...listGroup, ...cardStyle}}>
          <ListGroup >
              <ListGroup.Item 
              style={listGroup}
              onClick={() => onSelectedMatch(item.idMatch)}
              >
                  <img src={item.logoHome} alt={`логотип ${nameHome}`} style={{width: "35px", height: "35px"}}/>
                  <span style={{fontWeight: 'bold'}}>{nameHome}</span>
                  <span style={{fontWeight: 'bold'}}>{nameAway}</span>
                  <img src={item.logoAway} alt={`логотип ${nameAway}`} style={{width: "35px", height: "35px"}}/>
              </ListGroup.Item>
              {/* <MatchCards matches={matches}/> */}
              <ListGroup.Item style={listGroup}>
                  <span>П1 <span style={{marginLeft: '15px'}}>{odds.homeWin}</span></span>
                  <span>Н <span style={{marginLeft: '15px'}}>{odds.draw}</span></span>
                  <span>П2 <span style={{marginLeft: '15px'}}>{odds.awayWin}</span></span>
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
              onClick={() => onSelectedMatch(item.idMatch)}
              >
              Загрузить кэффы
              </Button>
          </ListGroup>
        </Card>
      )
    });
    
    const ulStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 200px)',
      columnGap: '400px',
      rowGap: '35px',
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
            Загрузить команды
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