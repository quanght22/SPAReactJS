import './scss/home.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCustomers } from './store/action';
import { Content } from 'layout';

const mapStateToProps = (state) => {
    return { customers: state.scenesStore.customersReducer.customers };
};
const mapDispatch = dispatch => ({
    getCustomers: () => dispatch(getCustomers())
});
class Home extends Component {
    componentWillMount() {
        this.props.getCustomers();
    }
    render() {
        console.log('this.props.customers', this.props.customers);
        return (
            <div>
                <Content>
                    <div className="placeholder">
                        {this.props.customers.map((customer) => (
                            <span key={customer.id}> {customer.email}</span>
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
