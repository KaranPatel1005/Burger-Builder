import * as actionTypes from './ActionTypes';
import Axios from '../../AxiosOrders';

export const addIngredient = (ingName) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: ingName
    }
}

export const removeIngredient = (ingName) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: ingName
    }
}

export const setIngredient = (ingredient) => {
    return {
        type: actionTypes.SET_INGREDIENT,
        ingredient: ingredient
    }
}

export const fetchIngredientFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENT_FAILED
    }
}

export const initIngredient = () => {
    return dispatch => {
        Axios.get('/ingredient.json')
            .then(response => {
                dispatch(setIngredient(response.data))
            })
            .catch(
                error => {
                    dispatch(fetchIngredientFailed())
                }
            )
    }
}