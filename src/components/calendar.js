import React from 'react'
import "../App.css"

class Calendar extends React.Component {
  render() {
    return (
      <div className="container"> 
      <div className="row"> 
      <iframe src="https://calendar.google.com/calendar/embed?mode=WEEK&amp;height=800&amp;wkst=1&amp;bgcolor=%23ccccff&amp;src=a8b02rsucen44ko43uoqs2ukc8%40group.calendar.google.com&amp;color=%232952A3&amp;ctz=America%2FNew_York"
      	width="1000" height="800" frameborder="0" scrolling="no"></iframe>
      	</div> 
      </div>
    )
  }
}

export default Calendar