import React, { Component } from 'react';
import { connect } from 'react-redux';

//HOC
import Auxiliary from '../../HOC/Auxiliary';
import WithErrorHandler from '../../HOC/WithErrorHandler/WithErrorHandler';

// Axios
import Axios from '../../AxiosOrders';

//Components
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Model from '../../Components/UI/Model/Model';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../Components/UI/Spinner/Spinner';

// Actions
import * as burgerBuilderActions from '../../Store/Actions/index';

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            purchasing: false
        }
    }

    componentDidMount() {
        this.props.onInitIngredient();
    }

    updatePurchaseState(ingredient) {
        const sum = Object.keys(ingredient)
            .map(igKey => {
                return ingredient[igKey]
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        return sum > 0;
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    purchaseContinueHandler = () => {
        this.props.onInitPurchase();
        this.props.history.push('/checkout');
    }

    render() {
        const disabledInfo = {
            ...this.props.ings
        }

        for (let keys in disabledInfo) {
            disabledInfo[keys] = disabledInfo[keys] <= 0
        }
        let orderSummary = null;

        let burger = this.props.error ? <p>ingredients can't be loaded</p>
            : <Spinner />

        if (this.props.ings) {
            burger = (
                <Auxiliary>
                    <Burger ingredient={this.props.ings} />
                    <BuildControls
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemoved}
                        disabled={disabledInfo}
                        price={this.props.price}
                        purchasable={this.updatePurchaseState(this.props.ings)}
                        ordered={this.purchaseHandler}
                    />
                </Auxiliary>
            );
            orderSummary = <OrderSummary
                ingredient={this.props.ings}
                price={this.props.price}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
            />;
        }

        let model = <Model
            show={this.state.purchasing}
            modelClosed={this.purchaseCancelHandler}
        >
        </Model>;

        if (this.state.purchasing) {
            model = <Model
                show={this.state.purchasing}
                modelClosed={this.purchaseCancelHandler}
            >
                {orderSummary}
            </Model>
        }
        return (
            <Auxiliary>
                {model}
                {burger}
            </Auxiliary>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burger.ingredient,
        price: state.burger.totalPrice,
        error: state.burger.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(burgerBuilderActions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(burgerBuilderActions.removeIngredient(ingName)),
        onInitIngredient: () => dispatch(burgerBuilderActions.initIngredient()),
        onInitPurchase: () => dispatch(burgerBuilderActions.purchaseInit())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler(BurgerBuilder, Axios));