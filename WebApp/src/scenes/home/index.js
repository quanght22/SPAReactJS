import './scss/home.scss';
import React, { Component } from 'react';
import { getProducts } from './store/action';
import { Content } from 'layout';

const mapState = state => ({
    products: state.products
});
const mapDispatch = dispatch => ({
    getProducts: () => dispatch(getProducts())
});
class Home extends Component {
    static propTypes = {
        products: ProTypes.Object
    }
    componentWillMount() {
        getProducts();
    }
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
export default connect(
    mapState,
    mapDispatch
)(Home);
