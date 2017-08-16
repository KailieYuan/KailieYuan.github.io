import React, { Component } from 'react';
import Grid from '../components/colorflood/grid/Grid';
import ColorPickers from '../components/colorflood/colorpickers/ColorPickers';
import { Graph } from '../graph.js';

import '../index.css';

const SIZE = 12;
const COLORS = ['blue','red','green','yellow','orange'];

class ColorFlood extends Component {
  constructor(props) {
    super(props);
    this.incrementCount = this.incrementCount.bind(this);
    this.sliderInput = this.sliderInput.bind(this);
    this.restart = this.restart.bind(this);
    this.colorFill = this.colorFill.bind(this);
    this.state = {
      size: SIZE,
      graph: new Graph(SIZE),
      colors: COLORS,
      count: 0,
    }
  }

  incrementCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

  restart() {
    this.setState({
      graph: new Graph(this.state.size),
      count: 0
    });
  }

  sliderInput(value) {
    this.setState({
      size: value,
      graph: this.newGrid(value, this.state.colors),
      count: 0
    });
  }

  colorFill(color) {
    this.state.graph.colorFill(color);
  }

  render() {
    return (
      <div className="content">
        <div className="header">
          <h1>Color Flood</h1>
          <div className="newgame" onClick={(e) => this.restart()}>New Game</div>
          <div className="count">Changes <span>{this.state.count}</span></div>
        </div>
          <div><ColorPickers colors={this.state.colors} clickHandler={this.colorFill} incrementCount={this.incrementCount}/></div>
        <Grid grid={this.state.graph} colors={this.state.colors} size={this.state.size}/>
      </div>
    );
  }
}

export default ColorFlood;