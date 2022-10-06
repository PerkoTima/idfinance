import React from "react";
import styles from "./Button.module.scss"

const Button = ({...props}) => {
    return( 
        <button onClick={props.handler} className={styles.button} type={props.buttonType}>{props.buttonName}</button>
    )
}

export default Button