export const types = {
    GET_PRODUCTS: 'GET_PRODUCTS'
};
export function  getProducts(){
    return {
        type: types.GET_PRODUCTS,
        products: new Array("1","2","3")
    };
};
