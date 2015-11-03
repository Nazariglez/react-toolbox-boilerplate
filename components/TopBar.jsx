import React from 'react';
import { AppBar, Navigation } from 'react-toolbox';

const testLinks = [
  {label: "Test One", kind: "raised", icon: "battery-full", href: '#/test1'},
  {label: "Test Two", kind: "raised", icon: "business", href: '#/test2'}
];

class TopBar extends React.Component {
  render() {
    return (
      <AppBar fixed flat>
        <strong><a href="#/">React-Toolbox Boilerplate </a></strong>
        <Navigation type='horizontal' routes={testLinks} />
      </AppBar>
    );
  }
}

export default TopBar;