import React from 'react';

// CSS
import styles from './DrawerToggle.module.css';

const DrawerToggle = (props) => (
    <div
        className={styles.DrawerToggle} 
        onClick={props.drawerToggleClick}>
        <div></div>
        <div></div>
        <div></div>
    </div>
    )

export default DrawerToggle;
