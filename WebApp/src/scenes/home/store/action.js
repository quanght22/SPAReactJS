import UserService from 'scenes/services/userService';
let userService = new UserService();
export const types = {
    GET_CUSTOMER: 'GET_CUSTOMER'
};
export function getCustomers() {
    return (dispatch) => {
        return userService.getUserList().then((response) => {
            console.log(response);
           return {
               type: types.GET_CUSTOMER,
               customers: response.customers
            };
        });
    };
    
};