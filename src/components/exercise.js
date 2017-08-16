import React from 'react'
import _ from 'lodash';
import VideoDetail from './video_detail';
import YTSearch from 'youtube-api-search';
import ExerciseList from './ExerciseList.js'
import "../App.css"

const API_KEY = 'AIzaSyC2A4G3rez2Qus9RRhT2JTQLiiMpGZ6ZbI'; 


class Exercise extends React.Component {
  constructor(props) {
    super(props); 

    this.state = {
       videos: [],
       selectedVideo: null
       };
    this.exerciseSearch('exercise');
  }

  exerciseSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({ 
        videos: videos, 
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const exerciseSearch = _.debounce((term) => { this.exerciseSearch(term) }, 50); 
    return (
      <div>
        <div>Exercise!</div>
        <strong>Your list of available exercises</strong>
        <div className="exercise-container">
        <ExerciseList onSearchTermChange={exerciseSearch}/> 
        <VideoDetail  video={this.state.selectedVideo}/> 
        </div>
      </div>
    );
  }
}

export default Exercise 