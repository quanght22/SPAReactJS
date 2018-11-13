import './scss/customers.scss';

import React, { Component } from 'react';
import {Content} from 'layout';

class Customers extends Component {
  render() {
    return (
      <div>
        <Content>
           <div className="customers placeholder">Customers</div>
        </Content>
      </div>
    );
  }
}

export default Customers;
