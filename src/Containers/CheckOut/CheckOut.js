import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Route } from 'react-router';

// Components
import CheckoutSummary from '../../Components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData';

class CheckOut extends Component {

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data'); 
    }


    render() {
        return (
            <div>  
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
}

const mapStateToProps = state => {
    return {
        ings: state.ingredient
    }
}

export default connect(mapStateToProps)(CheckOut);