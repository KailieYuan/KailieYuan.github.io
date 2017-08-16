import React from 'react'
import "../App.css"

class Calendar extends React.Component {
  render() {
    return (
      <div className="container"> 
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=a8b02rsucen44ko43uoqs2ukc8%40group.calendar.google.com&amp;color=%232952A3&amp;ctz=America%2FNew_York"
          width="800" height="600" frameborder="0" scrolling="no"></iframe>
      </div>
    )
  }
}

export default Calendar