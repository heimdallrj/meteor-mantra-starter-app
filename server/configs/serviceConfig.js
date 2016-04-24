/* eslint no-undef:0 */
import { Meteor } from 'meteor/meteor';

export default function () {
  ServiceConfiguration.configurations.remove({
    service: 'github',
  });

  const githubConfig = Meteor.settings.github;

  ServiceConfiguration.configurations.insert({
    service: 'github',
    ...githubConfig,
  });
}
