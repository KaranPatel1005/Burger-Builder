import React from 'react'

// CSS
import styles from './OrderSummary.module.css';

// HOC
import Auxiliary from '../../../HOC/Auxiliary'

// Components
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredient)
        .map(igKey => {
            return <li key={igKey} style={{textTransform: 'capitalize'}}>
                        <span>{igKey}</span>: {props.ingredient[igKey]}
                    </li>
        })
    return (
        <Auxiliary>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul className={styles.OrderSummary}>
                {ingredientSummary}
            </ul>
            <strong>
                <p>Total Price: {props.price.toFixed(2)} $</p>
            </strong>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Auxiliary>
    )
}

export default OrderSummary
