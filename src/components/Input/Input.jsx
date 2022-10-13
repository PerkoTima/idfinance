import React from "react";
import styles from "./Input.module.scss"


const Input = React.forwardRef((props,ref) => {
    return(
        <div className={props.type === 'date' ? styles.birthday_input_wrapper : styles.input_wrapper}>
            <label className={styles.label} htmlFor={props.id}>{props.label}</label>
            <input
                className={props.type === 'date' ? styles.birthday : styles.input}
                onChange={props.onChange}
                value={props.value}
                required={props.required}
                placeholder={props.placeholder}
                type={props.type}
                id={props.id}
                minLength={props.minLength}
                maxLength={props.maxLength}
                ref={ref}
                defaultValue={props.defaultValue}
            />
            <div className={styles.error}>
                {props.error}
            </div>
        </div>
    )
})

export default Input