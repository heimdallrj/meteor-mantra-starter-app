import React from 'react';
import { styles } from './layout/theme';
import radium from 'radium';

const mainStyle = {
  textAlign: 'center',
  fontSize: 10,
  padding: 25,
  borderTop: '1px solid #EEE',
  textTransform: 'uppercase',
  letterSpacing: 1,
  ...styles.base,
};

const Footer = () => (
  <div style={ mainStyle }>
    <p>(c) footer text</p>
  </div>
);

export default radium(Footer);
