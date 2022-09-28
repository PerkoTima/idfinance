import React from "react";
import styles from "./Input.module.scss"

const Input = ({...props}) => {
    return(
        <div className={styles.input_wrapper}>
            <label className={styles.label} htmlFor={props.inputName}>{props.labelText}</label>
            <input className={styles.input} type={props.type} name={props.inputName} value={props.value}/>
        </div>
    )
}

export default Input