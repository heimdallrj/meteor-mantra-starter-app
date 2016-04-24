import { Meteor } from 'meteor/meteor';
export default function ({ FlowRouter }) {
  if (Meteor.isServer) {
    global.navigator = {
      get userAgent() {
        const { _serverRequest } = FlowRouter.current();
        return _serverRequest ? _serverRequest.headers['user-agent'] : null;
      },
    };
  }
}
