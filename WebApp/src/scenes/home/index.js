import './scss/home.scss';
import React, { Component } from 'react';
import {Content} from 'layout';
class Home extends Component {
    render() {
        return (
            <div>
                <Content>
                    <div className="placeholder">Home Content</div>
                </Content>
            </div>
        );
    }
}

export default Home;
