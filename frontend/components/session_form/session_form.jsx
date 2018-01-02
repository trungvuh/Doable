import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  componentWillUnmount() {
    this.props.receiveSessionErrors([]);
  }

  //look over this one when have time
  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  handleInput(type) {
    return (event) => {
      this.setState({ [type]: event.target.value });
    };
  }

  demoLogin(event) {
    event.preventDefault();
    const demoUser = {username:"Baby_demo", password:"password"};
    this.props.login(demoUser);
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  navLink() {
    if (this.props.formType === 'login') {
      return (
        <Link to="/signup">
          <button className="session-button">SIGN UP</button>
        </Link>
      );
    }
    else {
      return (
        <Link to="/login">
          <button className="session-button">LOG IN</button>
        </Link>
      );
    }
  }

  renderErrors() {
    return (
      <ul>
        {
          this.props.errors.map((error, index) => (
            <li key={index}>{error}</li>))
        }
      </ul>
    );
  }

  render () {

    const title = (this.props.formType === 'login') ? 'Log In' : 'Sign Up';
    const otherTitle = (this.props.formType === 'login') ? 'New User?' : 'Already a User?';
    const capitalTitle = title.toUpperCase();

    return (
      <div className="session-section">
        <div className="main-session-form">
          <div className="session-title">
            <h2>{title}</h2>
            {this.renderErrors()}
          </div>

          <form onSubmit={this.handleSubmit} className="session-form">

            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
              required="true"
              placeholder="Username"
              className="session-input" />

            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
              required="true"
              placeholder="Password"
              className="session-input" />

            <input
              type="submit"
              value={capitalTitle}
              className="session-button" />

          </form>

        </div>
        <div className="other-session-form">
          <div>
            <h4 className="session-other-title">{otherTitle}</h4>
            <span>{this.navLink()}</span>
          </div>
          <div>
            <h4 className="session-other-title">Just Testing Out?</h4>
            <button
              className="session-button"
              onClick={this.demoLogin}>DEMO LOG IN
            </button>
          </div>
        </div>

      </div>
    );
  }
}
export default withRouter(SessionForm);
