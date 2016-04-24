/* eslint max-len:0 */

import React from 'react';
import Theme from './theme';
import Header from '../header';
import Footer from '../footer';

const Layout = ({ content = () => null }) => (
  <Theme>
    <div>
      <Header />
      <div>
        {content()}
      </div>
      <Footer />
    </div>
  </Theme>
);

Layout.propTypes = {
  content: React.PropTypes.func,
};

export default Layout;
