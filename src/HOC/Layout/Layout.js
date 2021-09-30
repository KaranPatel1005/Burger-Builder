import React, { useState } from 'react';

// CSS
import styles from './Layout.module.css';

// HOC
import Auxiliary from '../Auxiliary';

// Components
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer';

const Layout = (props) => {

    const [showSideDrawer, setShowSideDrawer] = useState(false)
    
    const sideDrawerClodedHandler = () => {
        setShowSideDrawer(!showSideDrawer)
    }
    return (
        <Auxiliary>
            <Toolbar open={sideDrawerClodedHandler}/>
            <SideDrawer 
                open={showSideDrawer} 
                closed={sideDrawerClodedHandler}
            />
            <main className={styles.Content}>
                {props.children}
            </main>
        </Auxiliary>
    )
}

export default Layout;
