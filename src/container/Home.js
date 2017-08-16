import React, { Component } from 'react';
import '../App.css';
import {Card, CardTitle, Col} from 'react-materialize'
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
            <Col m={6} s={12}>
                <Card
                    className='small blue lighten-5'
                    textClassName='black-text' title="Events Calender" header={<CardTitle
                    image={require('../images/cards_cal.jpg')} waves='light' />}
                    actions={[<Link to="/">Events Calendar</Link>]}
                    >
                </Card>
            </Col> 
             <Col m={6} s={12}>
                <Card
                    className='small blue lighten-5'
                    textClassName='black-text' title="Maps" header={<CardTitle
                    image={require('../images/cards_map.jpg')} waves='light' />}
                    actions={[<Link to="/map">Maps</Link>]}
                    >
                </Card>
            </Col> 
            <Col m={6} s={12}>
                <Card
                    className='small blue lighten-5'
                    textClassName='black-text' title="Chat" header={<CardTitle
                    image={require('../images/cards_chat.jpg')} waves='light' />}
                    actions={[<Link to="/">Chat</Link>]}
                    >
                </Card>
            </Col>
            <Col m={6} s={12}>
               <Card
                    className='small blue lighten-5'
                    textClassName='black-text' title="Exercise" header={<CardTitle
                    image={require('../images/cards_exercise.jpg')} waves='light' />}
                    actions={[<Link to="/">Exercise</Link>]}
                    >
                </Card>
            </Col> 
            <Col m={6} s={12}>
        	   <Card
                    className='small blue lighten-5'
                    textClassName='black-text' title="Games" header={<CardTitle
                    image={require('../images/cards_games.jpg')} waves='light' />}
                    actions={[<Link to="/games">Games</Link>]}
                    >
                </Card>
            </Col> 
            <Col m={6} s={12}>
                <Card
                    className='small blue lighten-5'
                    textClassName='black-text' title="Music" header={<CardTitle
                    image={require('../images/cards_music.jpg')} waves='light' />}
                    actions={[<Link to="/music">Music</Link>]}
                    >
                </Card>
            </Col> 
        </div>
    </div>
    );
  }
}

export default App;
