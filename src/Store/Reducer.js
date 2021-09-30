import * as actionType from './Actions';

const initialState = {
    ingredient: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    totalPrice: 4
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.4,
    cheese: 1.3,
    meat: 0.7
}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionType.ADD_INGREDIENT:
            return{
                ...state,
                ingredient: {
                    ...state.ingredient,
                    [action.ingredientName]: state.ingredient[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],

            };
        case actionType.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredient: {
                    ...state.ingredient,
                    [action.ingredientName]: state.ingredient[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
        };
            default:
                return state;
    }
}

export default reducer;