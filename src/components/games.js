import React from 'react'
import {Card, CardTitle, Col} from 'react-materialize'
import { Link } from 'react-router-dom'

import "../App.css"

class Games extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="row">
            <Col m={6} s={12}>
                <Card
                    className='small blue lighten-5'
                    textClassName='black-text' title="ColorFlood Game" header={<CardTitle
                    image={require('../images/ColorFlood.jpg')} waves='light' />}
                    actions={[<Link to="/games/colorflood">Click here to play</Link>]}
                    >
                </Card>
            </Col>
            <Col m={6} s={12}>
                <Card
                    className='small blue lighten-5'
                    textClassName='black-text' title="Trivia!" header={<CardTitle
                    image={require('../images/Jeopardy.jpg')} waves='light' />}
                    actions={[<Link to="/games">Click here to play</Link>]}
                    >
                </Card>
            </Col> 
            <Col m={6} s={12}>
                <Card
                    className='small blue lighten-5'
                    textClassName='black-text' title="Sudoku!" header={<CardTitle
                    image={require('../images/sudoku.jpg')} waves='light' />}
                    actions={[<Link to="/games">Click here to play</Link>]}
                    >
                </Card>
            </Col> 
            <Col m={6} s={12}>
                <Card
                    className='small blue lighten-5'
                    textClassName='black-text' title="Add More Games!" header={<CardTitle
                    image={require('../images/add_more.png')} waves='light' />}
                    actions={[<Link to="/games">Click here to play</Link>]}
                    >
                </Card>
            </Col> 
          </div>
        </div>
    )
  }
}

export default Games