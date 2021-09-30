import React from 'react';

// HOC
import WithClass from '../../HOC/WithClass';
import Auxiliary from '../../HOC/Auxiliary';

// Styles
import styles from '../Burger/Burger.module.css';

// Components
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
    let transformedIngredients = 
        Object.keys(props.ingredient).map( igKey => {
            return [...Array(props.ingredient[igKey])]
            .map((_, i) => {
                    return <BurgerIngredient key={igKey + i} type={igKey} />
                }
            )
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

        if(transformedIngredients.length === 0) { 
            transformedIngredients = <p>Please add ingredients</p>
        }
    
    return (
        <Auxiliary>
           <BurgerIngredient type="bread-top" />
           {transformedIngredients}
           <BurgerIngredient type="bread-bottom" />
        </Auxiliary>
    )
}

export default WithClass(Burger, styles.Burger);
