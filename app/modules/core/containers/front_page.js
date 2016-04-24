import FrontPage from '../components/front_page';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export function setSeoTags(DocHead) {
  const title = 'app Title';
  const description = 'app Desc';
  const screenImage = 'app Img';

  // add default info
  DocHead.setTitle(title);
  DocHead.addMeta({ name: 'description', content: description });

  // add twitter card
  DocHead.addMeta({ name: 'twitter:card', content: 'summary_large_image' });
  DocHead.addMeta({ name: 'twitter:site', content: '@twitter_handler' });
  DocHead.addMeta({ name: 'twitter:url', content: 'https://url.io' });
  DocHead.addMeta({ name: 'twitter:title', content: title });
  DocHead.addMeta({ name: 'twitter:description', content: description });
  DocHead.addMeta({ name: 'twitter:image', content: screenImage });

  // add facebook card
  DocHead.addMeta({ name: 'og:type', content: 'website' });
  DocHead.addMeta({ name: 'og:site_nam', content: 'SITE NAME' });
  DocHead.addMeta({ name: 'og:url', content: 'https://url.io' });
  DocHead.addMeta({ name: 'og:title', content: title });
  DocHead.addMeta({ name: 'og:description', content: description });
  DocHead.addMeta({ name: 'og:image', content: screenImage });
}

export const composer = ({ context, actions }, onData) => {
  const { Meteor, DocHead, LocalState } = context();
  const { user } = actions();

  const data = {
    loggedIn: Boolean(Meteor.user()),
    loggingIn: Meteor.loggingIn(),
  };

  setSeoTags(DocHead);

  onData(null, data);
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(FrontPage);
