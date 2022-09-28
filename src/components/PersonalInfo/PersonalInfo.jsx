import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import styles from "./PersonalInfo.module.scss"

const PersonalInfo = () => {
    const validateSignUp = (e) => {
        e.preventDefault()
        console.log(1)
        console.log(e)
    }

    return (
        <div className={styles.personal_info_wrapper}>
            <Input inputName="firstName" type="text" labelText="First name"/>

            <Input inputName="lastName" type="text" labelText="Last name"/>
            
            <div>
                <Input inputName="lastName" type="radio" labelText="men" value="man"/>
                <Input inputName="lastName" type="radio" labelText="woomen" value="woomen"/>
            </div>

            <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>

            <Input inputName="password" type="password" labelText="Password"/>
            
            <Input inputName="repeatPassword" type="password" labelText="Repeat password"/>

            <div className={styles.button_wrapper}>
                <Button validateSignUp={validateSignUp} buttonName="Change SingUp"/>
                <Button validateSignUp={validateSignUp} buttonName="Compleate"/>
            </div>
        </div>
    )
}

export default PersonalInfo