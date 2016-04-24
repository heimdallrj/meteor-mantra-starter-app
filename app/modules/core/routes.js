import React from 'react';
import { Meteor } from 'meteor/meteor';
import { mount } from 'react-mounter';

import Layout from './components/layout';
import FrontPage from './containers/front_page';

export default function (injectDeps, { FlowRouter }) {
  const LayoutCtx = injectDeps(Layout);

  // function loadDefaultSubs() {
  //   Meteor.subscribe('user.info');
  // }

  FlowRouter.route('/', {
    name: 'frontpage',
    action() {
      // loadDefaultSubs();
      mount(LayoutCtx, {
        content: () => (<FrontPage />),
      });
    },
  });
}
