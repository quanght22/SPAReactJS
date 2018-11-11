import './scss/about.scss';
import React, { Component } from 'react';
import {Content} from 'layout';

class About extends Component {
  render() {
    return (
      <div>
        <Content>
          <div className="about placeholder">About us</div>
        </Content>
      </div>
    );
  }
}

export default About;
