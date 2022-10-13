import React from "react";
import styles from "./Input.module.scss"


const Input = ({...props}) => {
    return(
        <div className={styles.input_wrapper}>
            <label className={styles.label} htmlFor={props.id}>{props.label}</label>
            <input
                className={styles.input}
                onChange={props.onChange}
                value={props.value}
                required={props.required}
                placeholder={props.placeholder}
                type={props.type}
                id={props.id}
                minLength={props.minLength}
                maxLength={props.maxLength}
            />
            <div className={styles.error}>
                {props.error}
            </div>
        </div>
    )
}

export default Input