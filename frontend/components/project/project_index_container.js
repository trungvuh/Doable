import { connect } from 'react-redux';

import { fetchProjects } from '../../actions/project_actions';
import ProjectIndex from './project_index';

const mapStateToProps = (state) => ({
  projects: Object.values(state.entities.projects)
});

const mapDispatchToProps = dispatch => ({
  fetchProjects: projects => dispatch(fetchProjects(projects))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectIndex);
