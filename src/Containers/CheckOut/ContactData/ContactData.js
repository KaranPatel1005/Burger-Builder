import React, { Component } from 'react'
import { connect } from 'react-redux';
import Axios from '../../../AxiosOrders';

// CSS
import styles from './ContactData.module.css';

// HOC
import WithErrorHandler from '../../../HOC/WithErrorHandler/WithErrorHandler'

// Components
import Button from '../../../Components/UI/Button/Button'
import Spinner from '../../../Components/UI/Spinner/Spinner';
import Input from '../../../Components/UI/Input/Input';

// Actions
import * as BurgerOrderAction from '../../../Store/Actions/index'

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                labelName: 'Enter Name',
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            street: {
                labelName: 'Enter Address',
                elementType: 'textarea',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Steet'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            zipCode: {
                labelName: 'Enter ZIP Code',
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Enter ZIP Code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5
                },
                valid: false,
                touched: false
            },
            country: {
                labelName: 'Enter Country Name',
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                labelName: 'Enter Email Address',
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-mail Address'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            delivery: {
                labelName: 'Select Delivery Method',
                elementType: 'select',
                elementConfig: {
                    options: [
                        {
                            value: 'fastest',
                            displayValue: 'Fastest'
                        },
                        {
                            value: 'cheapest',
                            displayValue: 'Cheapest'
                        }
                    ]
                },
                value: '',
                validation: {},
                valid: true,
            }
        },
        formIsValid: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }
        const data = {
            ingredient: this.props.ings,
            price: this.props.price,
            orderData: formData
        }
        this.props.onPurchaseOrder(data);
    }

    checkValidation(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }
        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }
        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        }
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        }
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid =
            this.checkValidation(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifiers in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifiers].valid && formIsValid
        }

        this.setState({
            orderForm: updatedOrderForm,
            formIsValid: formIsValid
        })


    }

    render() {
        let formElements = [];

        for (let key in this.state.orderForm) {
            formElements.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        let form = (
            <form onSubmit={this.orderHandler}>
                {
                    formElements.map(
                        input => {
                            return <Input
                                key={input.id}
                                label={input.config.labelName}
                                elementType={input.config.elementType}
                                elementConfig={input.config.elementConfig}
                                value={input.config.value}
                                invalid={!input.config.valid}
                                shouldValidate={input.config.validation}
                                touched={input.config.touched}
                                changed={(event) => this.inputChangedHandler(event, input.id)}
                            />
                        }
                    )
                }
                <Button
                    btnType="Success"
                    disabled={!this.state.formIsValid}
                >
                    ORDER
                </Button>
            </form>
        );
        if (this.props.loading) {
            form = <Spinner />
        }
        return (
            <div className={styles.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burger.ingredient,
        price: state.burger.totalPrice,
        loading: state.order.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPurchaseOrder: (data) => dispatch(BurgerOrderAction.purchaseBurger(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler(ContactData, Axios));