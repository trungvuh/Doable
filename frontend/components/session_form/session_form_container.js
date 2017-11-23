import { connect } from 'react-redux';
import { login, signup, logout, receiveSessionErrors } from '../../actions/session_actions';

import SessionForm from './session_form';

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;

  return {
    login: user => dispatch(login(user)),
    processForm: user => dispatch(processForm(user)),
    formType,
    receiveSessionErrors: (errors) => dispatch(receiveSessionErrors(errors))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
