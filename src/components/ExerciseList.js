import React from 'react'
import ReactList from 'react-list';
import "../App.css"

const renderItem = (index, key) =>
<div key={key} className={'item' + (index % 2 ? '' : ' even')}>
  {index + 1}. {examples.split(" ")[key]}
</div>;

renderItem.toJSON = () => renderItem.toString();



const examples = 
"Aerobics Ballet Baseball Basketball Biking Boating Bowling Boxing Canoeing Dance-Revolution Dancing Double-Dutch Field-Hockey Football Frisbee Golf Gymnastics Hiking Hockey Hopscotch Horseback-Riding Hula-hooping Ice-Skating Jogging Juggling Jump-rope Laser-tag Paintball Ping-Pong Playing-catch Rock-Climbing Roller-Blading Roller-Skating Running Skateboarding Skiing Soccer Softball Swimming Tae-Kwon-Do Tennis Trampoline Treadmill Unicycling Volleyball Walking Weightlifting Wii-sports-games";

class ExerciseList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }
 

  onItemClickHandler(event){
    this.setState({
      term: ("exercise" + event.target.innerText.split(" ")[1])
    })
    this.props.onSearchTermChange(this.state.term)
  }

  render() {
    return (
      <div style={divStyle} onClick={this.onItemClickHandler.bind(this)}><ReactList itemRenderer={renderItem} length={48}/></div> 
    ); 
  }
}

const divStyle = {
  overflow: 'auto',
  maxHeight: '400',
  width: '40%'
};

export default ExerciseList;