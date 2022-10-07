import React from "react";
import styles from "./Form.module.scss"
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import SignUpInfo from "../SignUpInfo/SignUpInfo";
import Modal from "../Modal/Modal";
import { useSelector } from "react-redux";

const Form = () => {

  const step = useSelector(state => state.step)

    return (
        <div className={styles.form_wrapper}>
          {step === 'signUpInfo' &&
            <SignUpInfo/>
          }
          {step === 'personalInfo' &&
            <PersonalInfo/>
          }
          {step === 'modal' &&
            <Modal/>
          }
        </div>
    )
}

export default Form