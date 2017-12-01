import React from 'react';
import { Link } from 'react-router-dom';

class SearchIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { project } = this.props;

    return (
      <li className='search-item'>
        <Link to={`/projects/${project.id}`} onClick={this.props.clearState} >
          <img
            src={project.img_url}
            className='search-thumbnail'
            />
          <span className='search-title'>{project.title}</span>
        </Link>
      </li>
    );
  }
}

export default SearchIndexItem;
