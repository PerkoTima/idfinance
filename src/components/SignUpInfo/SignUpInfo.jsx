import React from "react"
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./SignUpInfo.module.scss"

const SignUpInfo = () => {

    const validateSignUp = (e) => {
        e.preventDefault()
        console.log(1)
        console.log(e)
    }

    return (
        <div className={styles.sign_up_wrapper}>
            <Input inputName="phone" type="phone" labelText="Mobille phone"/>

            <Input inputName="email" type="email" labelText="Email"/>
            
            <Input inputName="password" type="password" labelText="Password"/>
            
            <Input inputName="repeatPassword" type="password" labelText="Repeat password"/>
            <div className={styles.button_wrapper}>
                <Button validateSignUp={validateSignUp} buttonName="Next"/>
            </div>
        </div>
    )
}

export default SignUpInfo

