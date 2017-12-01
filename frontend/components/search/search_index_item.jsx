import React from 'react';
import { Link } from 'react-router-dom';

class SearchIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { project } = this.props;

    return (
      <li>
        <img
          src={project.img_url}
          className='search-thumbnail'/>
        <span>{project.title}</span>
      </li>
    );
  }
}

export default SearchIndexItem;
