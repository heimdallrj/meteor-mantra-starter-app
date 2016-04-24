
export default {
  loginWithGithub({ Meteor }) {
     Meteor.loginWithGithub({
      requestPermissions: ['user:email'],
    }, () => {
      // if (callback) callback();
    });
  },

  loginWithFacebook({ Meteor }) {
    Meteor.loginWithFacebook();
  },

  loginWithGoogle({ Meteor}) {
    Meteor.loginWithGoogle();
  },

  loginWithTwitter({ Meteor }) {
    Meteor.loginWithTwitter();
  },

  logout({ Meteor }) {
    Meteor.logout();
  },
};
