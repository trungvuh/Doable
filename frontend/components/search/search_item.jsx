import React from 'react';
import SearchIndexItem from './search_index_item';

class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const projects = this.props.searchItems;
    const searchVal = this.props.searchVal;
    if (searchVal === '') return null;

    return(
      <div className="search-outer">
        <ul className="search-item-container">
          {
            projects.map(project => <SearchIndexItem
              key={project.id}
              project={project}
              currentUser={this.props.currentUser}
              clearState={this.props.clearState}
              />)
            }
          </ul>
          <button onClick={this.props.clearState}>X</button>
      </div>
    );
  }
}

export default SearchIndex;
