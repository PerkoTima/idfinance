import React from "react";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import SignUpInfo from "../SignUpInfo/SignUpInfo";
import styles from "./Form.module.scss"

const Form = () => {

    // const validate = (e) => {
    //     e.preventDefault()
    //     console.log(e)
    // }

    return (
        <form className={styles.form_wrapper}>
          <SignUpInfo />
          <PersonalInfo />
        </form>
    )
}

export default Form