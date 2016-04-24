/* eslint max-len:0 */

import React from 'react';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import Colors from 'material-ui/lib/styles/colors';
import ColorManipulator from 'material-ui/lib/utils/color-manipulator';
import Spacing from 'material-ui/lib/styles/spacing';
import zIndex from 'material-ui/lib/styles/zIndex';
import { StyleRoot } from 'radium';

export const styles = {
  base: {
    fontFamily: 'Roboto, sans-serif',
  },
  link: {
    color: '#03A9F4',
    textDecoration: 'none',
    ':active': {
      color: '#03A9F4',
    },
    ':hover': {
      borderBottom: '1px solid #EEE',
    },
  },
  h3: {
    fontSize: 30,
    fontWeight: 300,
  },
  h4: {
    fontSize: 22,
    fontWeight: 300,
    lineHeight: 1.5,
  },
  li: {
    fontSize: 15,
    lineHeight: 1.6,
  },
};

styles.page = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: 50,
  minHeight: 800,
  ...styles.base,
};

styles.pageContent = {
  width: 700,
  margin: '0 20px',
};

const myTheme = {
  spacing: Spacing,
  zIndex,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: Colors.cyan500,
    primary2Color: Colors.cyan700,
    primary3Color: Colors.lightBlack,
    accent1Color: Colors.pinkA200,
    accent2Color: Colors.grey100,
    accent3Color: Colors.grey500,
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.grey300,
    disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
    pickerHeaderColor: Colors.cyan500,
  },
  backgroundColor: '#F8F8F8',
  // userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36',
};


class Theme extends React.Component {
  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(myTheme),
    };
  }

  render() {
    return (
      <StyleRoot>
        { this.props.children }
      </StyleRoot>
    );
  }
}

Theme.childContextTypes = {
  muiTheme: React.PropTypes.object,
};

Theme.propTypes = {
  children: React.PropTypes.node,
};

export default Theme;
