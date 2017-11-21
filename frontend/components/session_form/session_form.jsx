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

  handleSubmit(event) {
    event.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  navLink() {
    if (this.props.formType === 'login') {
      return (
        <Link to="/signup">
          <button className="session-button">Sign Up</button>
        </Link>
      );
    }
    else {
      return (
        <Link to="/login">
          <button className="session-button">Sign In</button>
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

    return (
      <div className="session-section">
        <div className="main-session-form">
            <span className="session-title">{title}</span>

            <form onSubmit={this.handleSubmit}>
            {this.renderErrors()}

              <div className="session-form">
                <label>Username:
                  <input
                    type="text"
                    value={this.state.username}
                    onChange={this.handleInput('username')}
                    required="true" />
                </label>
                <br/>

                <label>Password:
                  <input
                    type="password"
                    value={this.state.password}
                    onChange={this.handleInput('password')}
                    required="true"/>
                </label>
                <br/>

                <input
                  type="submit"
                  value={title}
                  className="session-button" />
              </div>

            </form>
        </div>
        <div className="other-session-form">
          <span className="session-title">{otherTitle}</span>
          <br/>
          <span>{this.navLink()}</span>
        </div>

      </div>
    );
  }
}



export default withRouter(SessionForm);
