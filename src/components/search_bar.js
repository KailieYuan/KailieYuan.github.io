import React, { Component } from 'react'; 

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }
  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term); 
  }

  render() {
    // this.state.term = event.target.value  // very bad!!!!
    return (
      <div className="search-bar"> 
        <input 
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
        
      </div> 
    ); 
  }


  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
  // console log from render above 

}
// new SearchBar
// const SearchBar = () => {
//   return <input /> 
// }

export default SearchBar;
