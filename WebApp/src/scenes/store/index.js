import { combineReducers } from 'redux';
import customersReducer from 'scenes/customers/store';
import productsReducer from 'scenes/home/store';
export default combineReducers({
    customersReducer,
    productsReducer
});