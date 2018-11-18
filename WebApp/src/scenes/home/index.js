import './scss/home.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getProducts } from './store/action';
import { Content } from 'layout';

const mapStateToProps = (state) => {
    return { products: state.scenesStore.productsReducer.products };
};
const mapDispatch = dispatch => ({
    getProducts: () => dispatch(getProducts())
});
class Home extends Component {
    componentWillMount() {
        this.props.getProducts();
    }
    render() {
        return (
            <div>
                <Content>
                    <div className="placeholder">
                        {this.props.products.map((product,index) => (
                            <span key={index}> {product}</span>
                        ))}
                        </div>
                </Content>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatch
)(Home);
