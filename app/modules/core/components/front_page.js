import React from 'react';
import Login from '../containers/login';

class FrontPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <p>Front Page</p>

        <Login />

      </div>
    );
  }
}

FrontPage.propTypes = {
  loggedIn: React.PropTypes.bool,
  loggingIn: React.PropTypes.bool,
};

export default FrontPage;
