import './scss/contact.scss';
import React, { Component } from 'react';
import {Content} from 'layout';
class Contact extends Component {
  render() {
    return (
      <div>
        <Content>
          <div className="contact placeholder">Contact us</div>
        </Content>
      </div>
    );
  }
}

export default Contact;
