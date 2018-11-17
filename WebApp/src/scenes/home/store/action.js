export const types = {
    GET_PRODUCTS: 'GET_PRODUCTS'
};
export const getProducts = () => dispatch => {
    return dispatch({
        type: types.GET_PRODUCTS,
        products: new Array("Mary", "Tom", "Jack", "Jill") 
    });
};
