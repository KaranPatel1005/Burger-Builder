import React from 'react'

// CSS
import styles from './Logo.module.css';

// assets
import burgerLogo from '../../Assets/Images/burger-logo.png'

const Logo = (props) => {
    return (
        <div className={styles.Logo}>
            <img src={burgerLogo} alt={burgerLogo} />
        </div>
    )
}

export default Logo
 