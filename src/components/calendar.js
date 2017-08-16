import React from 'react'
import "../App.css"
import ReactAudioPlayer from 'react-audio-player';
import TextSection from './TextSection'

class Calendar extends React.Component {
  render() {
    return (
      <div className="parent"> 
      	<div className="wide"> 
      	<iframe src="https://calendar.google.com/calendar/embed?mode=WEEK&amp;height=800&amp;wkst=1&amp;bgcolor=%23ccccff&amp;src=a8b02rsucen44ko43uoqs2ukc8%40group.calendar.google.com&amp;color=%232952A3&amp;ctz=America%2FNew_York"
      		width="800" height="600" frameborder="0" scrolling="no"></iframe>
      	</div>
      	<div className="narrow">
      		<h5 className="header-text">Upcoming Events</h5>
      		<span className="sub-text">Thursday August 17</span><br/>
	      	<div className="reminder">
		  		<div className="player-container">
		      		<ReactAudioPlayer
					  src={require('../audio/George_Gershwin_playing_Rhapsody_in_Blue.ogg')}
					  controls
					/>
				</div>
				<TextSection eventTitle={ 'Computers for Seniors at 9am' }/>
		  	</div>
		  	<div className="reminder">
		  		<div className="player-container">
		      		<ReactAudioPlayer
					  src={require('../audio/George_Gershwin_playing_Rhapsody_in_Blue.ogg')}
					  controls
					/>
				</div>
				<TextSection eventTitle={ 'Trip to Museum of Modern Art at 11:30am' }/>
		  	</div>
		  	<div className="reminder">
		  		<div className="player-container">
		      		<ReactAudioPlayer
					  src={require('../audio/George_Gershwin_playing_Rhapsody_in_Blue.ogg')}
					  controls
					/>
				</div>
				<TextSection eventTitle={ 'Doll-Making Classes at 3pm' }/>
		  	</div>
		  	<div className="reminder">
		  		<div className="player-container">
		      		<ReactAudioPlayer
					  src={require('../audio/George_Gershwin_playing_Rhapsody_in_Blue.ogg')}
					  controls
					/>
				</div>
				<TextSection eventTitle={ 'Japanese Ikebana Lesson at 3pm' }/>
		  	</div>
		  	<div className="reminder">
		  		<div className="player-container">
		      		<ReactAudioPlayer
					  src={require('../audio/George_Gershwin_playing_Rhapsody_in_Blue.ogg')}
					  controls
					/>
				</div>
				<TextSection eventTitle={ 'TRIVIA Movie Themes at 6pm' }/>
		  	</div>
		  	<hr/>
		  	<span className="sub-text">Friday August 18</span><br/>
		  	<div className="reminder">
		  		<div className="player-container">
		      		<ReactAudioPlayer
					  src={require('../audio/George_Gershwin_playing_Rhapsody_in_Blue.ogg')}
					  controls
					/>
				</div>
				<TextSection eventTitle={ 'Cooking Class - Fruit Salad at 9am' }/>
		  	</div>
		  	<div className="reminder">
		  		<div className="player-container">
		      		<ReactAudioPlayer
					  src={require('../audio/George_Gershwin_playing_Rhapsody_in_Blue.ogg')}
					  controls
					/>
				</div>
				<TextSection eventTitle={ 'Gardening at 11am' }/>
		  	</div>
		  	<div className="reminder">
		  		<div className="player-container">
		      		<ReactAudioPlayer
					  src={require('../audio/George_Gershwin_playing_Rhapsody_in_Blue.ogg')}
					  controls
					/>
				</div>
				<TextSection eventTitle={ 'Talk to a Visitor at 1pm' }/>
		  	</div>
		  	<div className="reminder">
		  		<div className="player-container">
		      		<ReactAudioPlayer
					  src={require('../audio/George_Gershwin_playing_Rhapsody_in_Blue.ogg')}
					  controls
					/>
				</div>
				<TextSection eventTitle={ 'Social Dancing at 1pm' }/>
		  	</div>
		  	<div className="reminder">
		  		<div className="player-container">
		      		<ReactAudioPlayer
					  src={require('../audio/George_Gershwin_playing_Rhapsody_in_Blue.ogg')}
					  controls
					/>
				</div>
				<TextSection eventTitle={ 'Korean Kimchi Making Class at 3pm' }/>
		  	</div>
		  	<div className="reminder">
		  		<div className="player-container">
		      		<ReactAudioPlayer
					  src={require('../audio/George_Gershwin_playing_Rhapsody_in_Blue.ogg')}
					  controls
					/>
				</div>
				<TextSection eventTitle={ 'Gene Wilder in Willy Wonka and the Chocolate Factory Movie at 6pm' }/>
		  	</div>
	    </div>
      </div>
    )
  }
}

export default Calendar