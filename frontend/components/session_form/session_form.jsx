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

  componentWillMount() {
    document.title = "Doable - Login";
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
    const demoUser = {username:"demo", password:"password"};
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
          <button className="session-button">SIGN IN</button>
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

    const title = (this.props.formType === 'login') ? 'Sign In' : 'Sign Up';
    const otherTitle = (this.props.formType === 'login') ? 'New User' : 'Already a User?';
    const capitalTitle = title.toUpperCase();

    return (
      <div className="session-section">
        <div className="main-session-form">
          <div className="session-title">{title}</div>

            <form onSubmit={this.handleSubmit} className="session-form">
              {this.renderErrors()}

              <span>Username:</span>
              <input
                type="text"
                value={this.state.username}
                onChange={this.handleInput('username')}
                required="true"
                className="session-input" />

              <span>Password:</span>
              <input
                type="password"
                value={this.state.password}
                onChange={this.handleInput('password')}
                required="true"
                className="session-input"/>

              <input
                type="submit"
                value={capitalTitle}
                className="session-button" />

              <button
                className="session-button"
                onClick={this.demoLogin}>
                DEMO
              </button>
            </form>

          </div>
        <div className="other-session-form">
          <span className="session--other-title">{otherTitle}</span>
          <br/>
          <span>{this.navLink()}</span>
        </div>

      </div>
    );
  }
}



export default withRouter(SessionForm);
