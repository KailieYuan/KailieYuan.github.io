import React from 'react'
import "../App.css"
import ReactAudioPlayer from 'react-audio-player';
import TextSection from './TextSection'
import { Button, Icon } from 'react-materialize'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width: '700px'
  }
};


class Calendar extends React.Component {
	constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      eventName: ''
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal(e, eventTitle) {
  	e.preventDefault();
    this.setState({modalIsOpen: true, eventName: eventTitle});
  }
  closeModal() {
    this.setState({modalIsOpen: false, eventName: ''});
  }	
  render() {
    return (
      <div className="parent"> 
      	<div className="wide"> 
      		<iframe src="https://calendar.google.com/calendar/embed?mode=WEEK&amp;height=800&amp;wkst=1&amp;bgcolor=%23ccccff&amp;src=a8b02rsucen44ko43uoqs2ukc8%40group.calendar.google.com&amp;color=%232952A3&amp;ctz=America%2FNew_York"
      			width="800" height="600" frameborder="0" scrolling="no"></iframe>
      		<Button floating large className='red' waves='light'>
		    	<Link className="white-link" to="/home">BACK</Link>
		    </Button>
      	</div>
      	<div className="narrow">
      		<h5 className="header-text">Upcoming Events</h5>
      		<span className="sub-text">Thursday August 17</span><br/>
	      	<div className="reminder">
		  		<div className="player-container">
		      		<ReactAudioPlayer
					  src={require('../audio/event1.ogg')}
					  controls
					/>
				</div>
				<TextSection eventTitle={ 'Computers for Seniors at 9am' }/>
				<Button className="register-btn" onClick={(e) => this.openModal(e,'Computers for Seniors at 9am')}>Register</Button>
		  	</div>
		  	<div className="reminder">
		  		<div className="player-container">
		      		<ReactAudioPlayer
					  src={require('../audio/event2.ogg')}
					  controls
					/>
				</div>
				<TextSection eventTitle={ 'Trip to Museum of Modern Art at 11:30am' }/>
				<Button className="register-btn" onClick={(e) => this.openModal(e,'Trip to Museum of Modern Art at 11:30am')}>Register</Button>
		  	</div>
		  	<div className="reminder">
		  		<div className="player-container">
		      		<ReactAudioPlayer
					  src={require('../audio/event3.ogg')}
					  controls
					/>
				</div>
				<TextSection eventTitle={ 'Doll-Making Classes at 3pm' }/>
				<Button className="register-btn" onClick={(e) => this.openModal(e,'Doll-Making Classes at 3pm')}>Register</Button>
		  	</div>
		  	<div className="reminder">
		  		<div className="player-container">
		      		<ReactAudioPlayer
					  src={require('../audio/event4.ogg')}
					  controls
					/>
				</div>
				<TextSection eventTitle={ 'Japanese Ikebana Lesson at 3pm' }/>
				<Button className="register-btn" onClick={(e) => this.openModal(e,'Japanese Ikebana Lesson at 3pm')}>Register</Button>
		  	</div>
		  	<div className="reminder">
		  		<div className="player-container">
		      		<ReactAudioPlayer
					  src={require('../audio/event5.ogg')}
					  controls
					/>
				</div>
				<TextSection eventTitle={ 'TRIVIA Movie Themes at 6pm' }/>
				<Button className="register-btn" onClick={(e) => this.openModal(e,'TRIVIA Movie Themes at 6pm')}>Register</Button>
		  	</div>
		  	<hr/>
		  	<span className="sub-text">Friday August 18</span><br/>
		  	<div className="reminder">
		  		<div className="player-container">
		      		<ReactAudioPlayer
					  src={require('../audio/event6.ogg')}
					  controls
					/>
				</div>
				<TextSection eventTitle={ 'Cooking Class - Fruit Salad at 9am' }/>
				<Button className="register-btn" onClick={(e) => this.openModal(e,'Cooking Class - Fruit Salad at 9am')}>Register</Button>
		  	</div>
		  	<div className="reminder">
		  		<div className="player-container">
		      		<ReactAudioPlayer
					  src={require('../audio/event7.ogg')}
					  controls
					/>
				</div>
				<TextSection eventTitle={ 'Gardening at 11am' }/>
				<Button className="register-btn" onClick={(e) => this.openModal(e,'Gardening at 11am')}>Register</Button>
		  	</div>
		  	<div className="reminder">
		  		<div className="player-container">
		      		<ReactAudioPlayer
					  src={require('../audio/event8.ogg')}
					  controls
					/>
				</div>
				<TextSection eventTitle={ 'Talk to a Visitor at 1pm' }/>
				<Button className="register-btn" onClick={(e) => this.openModal(e,'Talk to a Visitor at 1pm')}>Register</Button>
		  	</div>
		  	<div className="reminder">
		  		<div className="player-container">
		      		<ReactAudioPlayer
					  src={require('../audio/event9.ogg')}
					  controls
					/>
				</div>
				<TextSection eventTitle={ 'Social Dancing at 1pm' }/>
				<Button className="register-btn" onClick={(e) => this.openModal(e,'Social Dancing at 1pm')}>Register</Button>
		  	</div>
		  	<div className="reminder">
		  		<div className="player-container">
		      		<ReactAudioPlayer
					  src={require('../audio/event10.ogg')}
					  controls
					/>
				</div>
				<TextSection eventTitle={ 'Korean Kimchi Making Class at 3pm' }/>
				<Button className="register-btn" onClick={(e) => this.openModal(e,'Korean Kimchi Making Class at 3pm')}>Register</Button>
		  	</div>
		  	<div className="reminder">
		  		<div className="player-container">
		      		<ReactAudioPlayer
					  src={require('../audio/event11.ogg')}
					  controls
					/>
				</div>
				<TextSection eventTitle={ 'Gene Wilder in Willy Wonka and the Chocolate Factory Movie at 6pm' }/>
				<Button className="register-btn" onClick={(e) => this.openModal(e,'Gene Wilder in Willy Wonka and the Chocolate Factory Movie at 6pm')}>Register</Button>
		  	</div>
	    </div>

	    <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          style={customStyles}
        >
        	
          <h5 className="blue-text">Register for {this.state.eventName}</h5>
          
          <form>
          	<h5>Scan your ID here:</h5>        	
          	<img className="barcode" src={require('../images/barcode.png')} />
          	<hr />
          	<h5>Complete the following form (if no ID):</h5>
            Name: <input placeholder="Enter Your Name" />
            Phone: <input placeholder="(123) 456-7890" />
          </form>
          <Button onClick={this.closeModal}>Submit</Button>&nbsp;&nbsp;
          <Button onClick={this.closeModal}>Cancel</Button>
        </Modal>
      </div>
    )
  }
}

export default Calendar