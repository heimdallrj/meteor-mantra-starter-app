export function login({ Meteor, window }, callback) {
  Meteor.loginWithGithub({
    requestPermissions: ['user:email'],
  }, () => {
    if (callback) callback();
  });
}

export default {
  login(context) {
    login(context);
  },

  logout({ Meteor }) {
    Meteor.logout();
  },
};
