import React, { Component } from 'react';

// CSS
import styles from '../Model/Model.module.css';

// HOC
import Auxiliary from '../../../HOC/Auxiliary';

// Components
import Backdrop from '../Backdrop/Backdrop';

class Model extends Component{
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }
    
    render() {
        return (
            <Auxiliary>
                <Backdrop show={this.props.show} clicked={this.props.modelClosed}/>
                <div
                    className={styles.Model}
                    style={{
                    transform: this.props.show ? 'translateY(0)'
                        : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                    }}
                    >
                        {this.props.children}
                </div>
            </Auxiliary>
        )
    }
}


export default Model;
