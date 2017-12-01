import React from 'react';
import SearchIndex from './search_item';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVal: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.clearState = this.clearState.bind(this);
  }

  handleChange(event) {
    event.preventDefault();

    const value = event.target.value;
    this.setState({ searchVal: value }, () => {
      this.props.searchDatabase(this.state.searchVal);
    });
  }

  clearState() {
    this.setState({ searchVal: ''});
  }

  render() {
    return (
      <div className="search-container">
        <input
          type="text"
          onChange={this.handleChange}
          placeholder="Search Project..."
          value={this.state.searchVal}
          />
        <SearchIndex
          currentUser={this.props.currentUser}
          searchItems={Object.values(this.props.searchResults)}
          searchVal={this.state.searchVal}
          clearState={this.clearState}
          />
      </div>
    );
  }
}

export default Search;
