// import * as actionTypes from '../Actions/BurgerBuilder';
import * as actionTypes from '../Actions/ActionTypes';

const initialState = {
    ingredient: null,
    totalPrice: 4,
    error: false
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.4,
    cheese: 1.3,
    meat: 0.7
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredient: {
                    ...state.ingredient,
                    [action.ingredientName]: state.ingredient[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],

            };
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredient: {
                    ...state.ingredient,
                    [action.ingredientName]: state.ingredient[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            };
        case actionTypes.SET_INGREDIENT:
            return {
                ...state,
                ingredient: {
                    salad: action.ingredient.salad,
                    bacon: action.ingredient.bacon,
                    cheese: action.ingredient.cheese,
                    meat: action.ingredient.meat
                },
                error: false
            };
        case actionTypes.FETCH_INGREDIENT_FAILED:
            return {
                ...state,
                error: true
            }
        default:
            return state;
    }
}

export default reducer;