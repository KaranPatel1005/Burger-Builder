import React from 'react';

const WithClass = (WrappedComponent, styles) => {
    return props => (
        <div className={styles}>
            <WrappedComponent {...props}/>
        </div>
    )
}

export default WithClass;
