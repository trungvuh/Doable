import { connect } from 'react-redux';

import { fetchProject, deleteProject } from '../../actions/project_actions';
import ProjectDetail from './project_detail';

const mapStateToProps = (state, ownProps) => ({
  project: state.entities.projects[ownProps.match.params.projectId],
  currentUser: state.session.currentUser,
  loading: state.ui.loading.detailLoading
});

const mapDispatchToProps = (dispatch) => ({
  fetchProject: id => dispatch(fetchProject(id)),
  deleteProject: id => dispatch(deleteProject(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetail);
