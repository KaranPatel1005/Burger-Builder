import React from 'react';

// CSS
import styles from './SideDrawer.module.css';

// Components
import Logo from '../../Logo/Logo';
import BackDrop from '../../UI/Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems';

// HOC
import Auxiliary from '../../../HOC/Auxiliary';

const SideDrawer = (props) => {
    let attachedClasses = [styles.SideDrawer, styles.Close];
    if(props.open){
        attachedClasses = [styles.SideDrawer, styles.Open];
    }
    return (
       <Auxiliary>
            <BackDrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
            <div className={styles.Logo}>
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
       </Auxiliary>
    )
}

export default SideDrawer;
