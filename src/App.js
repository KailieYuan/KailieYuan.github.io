import React, { Component } from 'react';
import {Card, Col} from 'react-materialize'

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="container">
         <div className="row">
        <Col m={6} s={12}>
		  <Card className='blue-grey darken-1' textClassName='white-text' title='English' actions={[<a href='#'>THIS IS A LINK</a>]}>
		    I am a very simple clickable card to go to maps 
		  </Card>
    </Col> 
    <Col m={6} s={12}>
		  <Card className='blue-grey darken-1' textClassName='white-text' title='Korean' actions={[<a href='#'>THIS IS A LINK</a>]}>
		    I am a very simple clickable card to go to chat
		  </Card>
    </Col>
    </div>
    </div>   
    );
  }
}

export default App;
