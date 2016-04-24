import Login from '../components/login';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ({ context, actions }, onData) => {
  const { Meteor } = context();
  const { user } = actions();

  const data = {
    loggedIn: Boolean(Meteor.user()),
    loggingIn: Meteor.loggingIn(),
    loginWithGithub: user.loginWithGithub,
    loginWithFacebook: user.loginWithFacebook,
    loginWithGoogle: user.loginWithGoogle,
    loginWithTwitter: user.loginWithTwitter,
    logout: user.logout,
  };

  onData(null, data);
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Login);
