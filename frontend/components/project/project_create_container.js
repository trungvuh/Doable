import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchProject, createProject, receiveProjectErrors } from '../../actions/project_actions';
import ProjectCreate from './project_create';

const mapStateToProps = (state) => {

  return {
    currentUser: state.session.currentUser,
    loading: state.ui.loading.detailLoading,
    errors: state.errors.project
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    createProject: project => dispatch(createProject(project)),
    receiveProjectErrors: error => dispatch(receiveProjectErrors(error))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ProjectCreate);
