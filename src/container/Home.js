import React, { Component } from 'react';
import '../App.css';
import {Card, Col} from 'react-materialize'
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="container">
    
    <div className="row">
     <Col m={6} s={12}>
		  <Card className='blue-grey darken-1' textClassName='white-text' title='Maps' actions={[<Link to="/">THIS IS A LINK</Link>]}>
		    I am a very simple clickable card to go to maps 
		  </Card>
    </Col> 
    <Col m={6} s={12}>
		  <Card className='blue-grey darken-1' textClassName='white-text' title='Chat' actions={[<a href='#'>THIS IS A LINK</a>]}>
		    I am a very simple clickable card to go to chat
		  </Card>
    </Col> 
    <Col m={6} s={12}>
		  <Card className='blue-grey darken-1' textClassName='white-text' title='Exercise' actions={[<a href='#'>THIS IS A LINK</a>]}>
		    I am a very simple clickable card to go to exercise  
		  </Card>
    </Col> 
    <Col m={6} s={12}>
		  <Card className='blue-grey darken-1' textClassName='white-text' title='Games' actions={[<a href='#'>THIS IS A LINK</a>]}>
		    I am a very simple clickable card to go to games 
		  </Card>
    </Col> 
    <Col m={6} s={12}>
		  <Card className='blue-grey darken-1' textClassName='white-text' title='Calendar' actions={[<a href='#'>THIS IS A LINK</a>]}>
		    I am a very simple clickable card to go to calendar 
		  </Card>
    </Col> 
    <Col m={6} s={12}>
		  <Card className='blue-grey darken-1' textClassName='white-text' title='Music' actions={[<a href='#'>THIS IS A LINK</a>]}>
		    I am a very simple clickable card to go to music 
		  </Card>
    </Col> 
    </div>
    </div>   
    );
  }
}

export default App;
