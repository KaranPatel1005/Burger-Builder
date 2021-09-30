import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router';

// Components
import CheckoutSummary from '../../Components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData';

// Actions
import * as orderAction from '../../Store/Actions/index'

class CheckOut extends Component {

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }


    render() {
        let summary = <Redirect to="/" />;
        if (this.props.ings) {
            const purchasedRedirect = this.props.purchased ?
                <Redirect to="/" /> : null;
            summary = (
                <div>
                    {purchasedRedirect}
                    <CheckoutSummary
                        ingredient={this.props.ings}
                        onCheckoutCancelled={this.checkoutCancelledHandler}
                        onCheckoutContinued={this.checkoutContinuedHandler}
                    />
                    <Route path={this.props.match.url + '/contact-data'}
                        component={ContactData}
                    />
                </div>
            )
        }
        return summary;
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burger.ingredient,
        purchased: state.order.purchased
    }
}


export default connect(mapStateToProps)(CheckOut);