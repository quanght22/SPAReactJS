import UserService from "scenes/services/userService";
let userService = new UserService();
export const types = {
    GET_CUSTOMERS: 'GET_CUSTOMERS'
};
export const getCustomers = () => dispatch => {
    return userService.getCustomers((response) => {
        return dispatch({
            type: types.GET_CUSTOMERS,
            customers: response
        });
    });
};
