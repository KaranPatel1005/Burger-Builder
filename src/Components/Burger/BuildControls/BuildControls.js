import React from 'react';

// CSS
import styles from '../BuildControls/BuildControls.module.css'

// HOC
import Auxiliary from '../../../HOC/Auxiliary';
import WithClass from '../../../HOC/WithClass';

// Components
import BuildControl from './BuildControl/BuildControl';

const Controls = [
    {label : 'Salad', type: 'salad'},
    {label : 'Bacon', type: 'bacon'},
    {label : 'Cheese', type: 'cheese'},
    {label : 'Meat', type: 'meat'}
]

const BuildControls = (props) => {
    return (
       <Auxiliary>
           <p>Current Price : <strong>
                {props.price.toFixed(2)} $
               </strong>
            </p>
           {
               Controls.map(controls => {
                   return <BuildControl 
                    key={controls.label} 
                    label={controls.label}
                    added={() => props.ingredientAdded(controls.type)}
                    removed={() => props.ingredientRemoved(controls.type)}
                    disabled={props.disabled[controls.type]}
                    />
               })
           }
           <button 
            className={styles.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}
            >
                ORDER NOW
            </button>
       </Auxiliary>
    )
}

export default WithClass(BuildControls, styles.BuildControls);
