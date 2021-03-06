import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './search_bar'; 
import VideoList from './video_list';
import VideoDetail from './video_detail';
import "../App.css"

const API_KEY = 'AIzaSyC2A4G3rez2Qus9RRhT2JTQLiiMpGZ6ZbI'; 



class Music extends React.Component {
  constructor(props) {
    super(props); 

    this.state = {
       videos: [],
       selectedVideo: null
       };
    this.videoSearch('old timey music');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({ 
        videos: videos, 
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300); 

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} /> 
        <VideoDetail video={this.state.selectedVideo} /> 
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos} 
        /> 
      </div>
    );
  }
}

export default Music 