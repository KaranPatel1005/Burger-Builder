import React from 'react';

// CSS
import styles from '../BuildControl/BuildControl.module.css';

// HOC
import Auxiliary from '../../../../HOC/Auxiliary';
import WithClass from '../../../../HOC/WithClass';

const BuildControl = (props) => {
    return (
        <Auxiliary>
                <label className={styles.Label}>{props.label}</label>
                <button 
                    className={styles.Less}
                    onClick={props.removed}
                    disabled={props.disabled}
                    >
                    Less
                </button>
                <button 
                    className={styles.More}
                    onClick={props.added}
                    >
                    More
                    </button>
        </Auxiliary>
    )
}

export default WithClass(BuildControl, styles.BuildControl);
