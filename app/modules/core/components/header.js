import React from 'react';
import radium from 'radium';
import { styles } from './layout/theme';
import { Flex, Box } from 'reflexbox';

const containerStyle = {
  padding: 20,
  ...styles.base,
};

class Header extends React.Component {
  render() {
    return (
      <Flex style={ containerStyle } justify="space-between" wrap>
        <Box>
          <p>Sample App</p>
        </Box>
        <Box justify="flex-end">
          <p>Navigations</p>
        </Box>
      </Flex>
    );
  }
}

Header.propTypes = {
};

export default radium(Header);
