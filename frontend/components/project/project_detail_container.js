import { connect } from 'react-redux';

import { fetchProject } from '../../actions/project_actions';
import ProjectDetail from './project_detail';

const mapStateToProps = (state, ownProps) => ({
  project: state.entities.projects[ownProps.match.params.projectId]
});

const mapDispatchToProps = (dispatch) => ({
  fetchProject: id => dispatch(fetchProject(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetail);
