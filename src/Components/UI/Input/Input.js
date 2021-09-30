import React from 'react'

// CSS
import styles from './Input.module.css'

const Input = (props) => {
    let inputElement = null;
    const inputClasses = [];

    if(props.invalid && props.shouldValidate && props.touched){
        inputClasses.push(styles.Invalid)
    }

    switch (props.elementType){
        case ('input'):
            inputElement = <input className={inputClasses.join(' ')}
                        {...props.elementConfig} 
                        value={props.value} onChange={props.changed}/>;
            break;
            case ('textarea'):
                inputElement = <textarea className={inputClasses.join(' ')}
                        {...props.elementConfig} 
                        value={props.value} onChange={props.changed}/>;
                break;
            case ('select'):
                inputElement = 
                    <select className={inputClasses.join(' ')} value={props.value} onChange={props.changed}>
                        <option selected value={null}> -- select an option -- </option>
                        { props.elementConfig.options.map(
                                option => {
                                    return <option
                                            key={option.value}
                                            value={option.value}>
                                                {option.displayValue}
                                            </option>
                                }
                        ) }
                    </select>;
                break;
        default:
            inputElement = <input 
                        className={inputClasses.join(' ')}
                        {...props.elementConfig} 
                        value={props.value} 
                        onChange={props.changed} />;
    }
    return (
        <div className={styles.Input}>
            <label>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default Input
