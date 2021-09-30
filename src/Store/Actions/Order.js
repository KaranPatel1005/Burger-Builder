import * as actionTypes from './ActionTypes';
import Axios from '../../AxiosOrders';

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    }
}

export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    }
}

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    }
}

export const purchaseBurger = (orderData) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        Axios.post('/orders.json', orderData)
            .then(
                response => {
                    setTimeout(() => {
                        dispatch(purchaseBurgerSuccess(response.data.name, orderData))
                    }, 300);
                }
            )
            .catch(
                error => {
                    dispatch(purchaseBurgerFail(error));
                }
            )
    }
}

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    }
}