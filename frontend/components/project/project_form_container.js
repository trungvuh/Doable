import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchProject, createProject, updateProject } from '../../actions/project_actions';
import ProjectForm from './project_form';

const mapStateToProps = (state, ownProps) => {
  let project = {
    title: "",
    description: "",
    category: "",
    img_url: "",
  };
  let formType = "new";
  if (ownProps.match.path === '/projects/:projectId/edit') {
    project = state.entities.projects[ownProps.match.params.projectId];
    formType = "edit";
  }

  return {
    project, formType,
    loading: state.ui.loading.indexLoading,
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
