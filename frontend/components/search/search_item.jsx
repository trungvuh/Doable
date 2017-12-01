import React from 'react';

class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const projects = this.props.searchItems;
    const searchVal = this.props.searchVal;
    if (searchVal === '') return null;

    return(
      <ul>
        {
          projects.map(project => <SearchIndexItem
            key={project.id}
            project={project}
            currentUser={this.props.currentUser}
            clearState={this.props.clearState}
            />)
        }
      </ul>
    );
  }
}

export default SearchIndex;
