import { connect } from 'react-redux';
import { searchDatabase } from '../../actions/project_actions';

import Search from './search';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  searchResults: state.entities.searchResults
});

const mapDispatchToProps = dispatch => ({
  searchDatabase: query => dispatch(searchDatabase(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
