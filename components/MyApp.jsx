import React from 'react';
import {App} from 'react-toolbox';
import TopBar from './TopBar.jsx';

class MyApp extends React.Component {
  render(){
    return (
      <App>
        <TopBar />
        <div>
          <br/><br/><br/>
          {this.props.children}
        </div>
      </App>
    );
  }
}

export default MyApp;