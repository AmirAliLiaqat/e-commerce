import {
    ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, ADD_ITEM_TO_CART_FAILURE,
    REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, REMOVE_CART_ITEM_FAILURE,
    UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE,
    GET_CART_REQUEST, GET_CART_SUCCESS, GET_CART_FAILURE
} from './ActionType';
import { api } from '../../config/apiConfig';

// get all cart items
export const getCart = () => async (dispatch) => {
    dispatch({type: GET_CART_REQUEST});
    try {
        const {data} = await api.get('/cart');
        console.log('cart', data)
        dispatch({type: GET_CART_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: GET_CART_FAILURE, payload: error.message});
    }
};

// add item to cart
export const addItemToCart = (reqData) => async (dispatch) => {
    dispatch({type: ADD_ITEM_TO_CART_REQUEST});
    try {
        const {data} = await api.put('/cart/add', reqData);
        console.log('item added to cart ', data)
        dispatch({type: ADD_ITEM_TO_CART_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: ADD_ITEM_TO_CART_FAILURE, payload: error.message});
    }
};

// remove item from cart
export const removeCartItem = (cartItemId) => async (dispatch) => {
    dispatch({type: REMOVE_CART_ITEM_REQUEST});
    try {
        const {data} = await api.delete(`/cart_items/${cartItemId}`);
        dispatch({type: REMOVE_CART_ITEM_SUCCESS, payload: cartItemId});
    } catch (error) {
        dispatch({type: REMOVE_CART_ITEM_FAILURE, payload: error.message});
    }
};

// update item in cart
export const updateCartItem = (reqData) => async (dispatch) => {
    dispatch({type: UPDATE_CART_ITEM_REQUEST});
    try {
        const {data} = await api.put(`/cart_items/${reqData.cartItemId}`, reqData.data);
        dispatch({type: UPDATE_CART_ITEM_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: UPDATE_CART_ITEM_FAILURE, payload: error.message});
    }
};