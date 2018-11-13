import { types } from "./action";
const initialState = {
    customers: []
};
export default function (state = initialState, action) {
    switch (action.type) {
        case types.GET_CUSTOMERS:
            return {
                ...state,
                customers: action.customers
            };
        default:
            return state;
    }
}
