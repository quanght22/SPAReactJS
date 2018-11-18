﻿import { types } from "./action";
import { debug } from "util";
const initialState = {
    products: []
};
export default function (state = initialState, action) {
    switch (action.type) {
        case types.GET_PRODUCTS:
            return {
                ...state,
                products: action.products
            }; 
        default:
            return state;
    }
}