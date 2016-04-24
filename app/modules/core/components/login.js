import React from 'react';
import radium from 'radium';

class Login extends React.Component {
  render() {
    const {
      loggedIn,
      loggingIn,
      loginWithGithub,
      loginWithFacebook,
      loginWithGoogle,
      loginWithTwitter,
      logout,
    } = this.props;

    if (loggedIn) {
      return (
        <div>
          <p>You already loggedIn.</p>
          <p onClick={logout}>Logout</p>
        </div>
      );
    }

    if (loggingIn) {
      return (
        <div>
          <p>logging...</p>
        </div>
      );      
    }

    return (
      <div>
        <ul>
          <li onClick={loginWithGithub}>Login with GitHub</li>
          <li onClick={loginWithFacebook}>Login with Facebook</li>
          <li onClick={loginWithGoogle}>Login with Google</li>
          <li onClick={loginWithTwitter}>Login with Twitter</li>
        </ul>
      </div>
    );
  }
}

Login.propTypes = {
  loggedIn: React.PropTypes.bool,
  loggingIn: React.PropTypes.bool,
  loginWithGithub: React.PropTypes.func,
  loginWithFacebook: React.PropTypes.func,
  loginWithGoogle: React.PropTypes.func,
  loginWithTwitter: React.PropTypes.func,
  logout: React.PropTypes.func,
};

export default radium(Login);
