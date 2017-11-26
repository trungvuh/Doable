import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchProject, updateProject, receiveProjectErrors } from '../../actions/project_actions';
import ProjectUpdate from './project_update';

const mapStateToProps = (state, ownProps) => {

  return {
    project: state.entities.projects[ownProps.match.params.projectId],
    // currentUser: state.session.currentUser,
    loading: state.ui.loading.detailLoading,
    errors: state.errors.project
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProject: project => dispatch(fetchProject(project)),
    updateProject: project => dispatch(updateProject(project)),
    receiveProjectErrors: error => dispatch(receiveProjectErrors(error))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ProjectUpdate);
