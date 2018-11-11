import './scss/products.scss';

import React, { Component } from 'react';
import {Content} from 'layout';

class Products extends Component {
  render() {
    return (
      <div>
        <Content>
          <div className="products placeholder">Products</div>
        </Content>
      </div>
    );
  }
}

export default Products;
