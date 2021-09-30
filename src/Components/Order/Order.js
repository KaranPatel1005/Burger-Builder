import React from 'react'

// CSS
import styles from './Order.module.css'

const Order = (props) => {
    console.log(props.ingredient);
    const ingredient = [];
    
    for(let ingredientName in props.ingredient){
        ingredient.push({
            name: ingredientName,
            amount: props.ingredient[ingredientName]
        })
    }

    const ingredientOutput = ingredient.map(
        ig => {
            return <span className={styles.Span} key={ig.name}>{ig.name} - {ig.amount}<br/></span>
        }
    )
    return (
        <div className={styles.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    )
}

export default Order
