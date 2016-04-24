/* eslint no-undef:0 */
import { Meteor } from 'meteor/meteor';

const services = Meteor.settings.private.oAuth;

export default configure = () => {
  if ( services ) {
    for( let service in services ) {
      ServiceConfiguration.configurations.upsert( { service: service }, {
        $set: services[ service ]
      });
    }
  }
};
