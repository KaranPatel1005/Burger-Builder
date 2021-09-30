import React from 'react'

// CSS
import styles from './CheckoutSummary.module.css'

// Components
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'

const CheckoutSummary = (props) => {
    return (
        <div className={styles.CheckoutSummary}>
            <h1>We hope it tastes well</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredient={props.ingredient} />
            </div>
            <Button 
                btnType="Danger"
                clicked={props.onCheckoutCancelled}
            >
                    CANCEL
            </Button>
            <Button 
                btnType="Success"
                clicked={props.onCheckoutContinued}
            >
                    CONTINUE
            </Button>
        </div>
    )
}

export default CheckoutSummary
