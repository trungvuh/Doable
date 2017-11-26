import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchProject, createProject, updateProject } from '../../actions/project_actions';
import ProjectForm from './project_form';

const mapStateToProps = (state, ownProps) => {

  return {
    currentUser: state.
    loading: state.ui.loading.detailLoading,
    errors: state.errors.project
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const process = ownProps.match.path === '/' ? createProject : updateProject;

  return {
    fetchProject: id => dispatch(fetchProject(id)),
    process: project => dispatch(process(project))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)(ProjectForm)
);
