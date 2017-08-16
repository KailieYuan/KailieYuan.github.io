import React, { Component } from 'react';
import {Card, Col} from 'react-materialize'
import { Link } from 'react-router-dom'

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="container">
         <div className="row">

        <Col m={6} s={12}>
		  <Card className='blue-grey darken-1' textClassName='white-text' title='English' actions={[<Link to="/home">Lets Start!</Link>]}>
		    Would you like English?
		  </Card>
    </Col> 
    <Col m={6} s={12}>
		  <Card className='blue-grey darken-1' textClassName='white-text' title='Korean' actions={[<Link to="/home">시작하자!</Link>]}>
        한국어를 좋아하니? 
		  </Card>
    </Col>
    </div>
    </div>   
    );
  }
}

export default App;
