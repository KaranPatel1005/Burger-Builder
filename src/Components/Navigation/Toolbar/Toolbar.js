import React from 'react'

// CSS
import styles from './Toolbar.module.css';

// Components
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = (props) => {
    return (
        <header className={styles.Toolbar}>
            <DrawerToggle drawerToggleClick={props.open}/>
            <Logo />
            <nav className={styles.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    )
}

export default Toolbar
