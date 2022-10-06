import React, { useState } from "react";
import styles from "./Form.module.scss"
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import SignUpInfo from "../SignUpInfo/SignUpInfo";
import Modal from "../Modal/Modal";
import { useSelector } from "react-redux";

const Form = () => {

  const step = useSelector(state => state.step)
  
  const personalInfostate = {
    firstName: '',
    lastName: '',
    gender: '',
    birthday: '',
    ocean: '',
    hobby: []
  }
  const [personalInfo, setPersonalInfo] = useState(personalInfostate)

    return (
        <div className={styles.form_wrapper}>
          {step === 'signUpInfo' &&
            <SignUpInfo/>
          }
          {step === 'personalInfo' &&
            <PersonalInfo
              personalInfo={personalInfo}
              setPersonalInfo={setPersonalInfo}
            />
          }
          {step === 'modal' &&
            <Modal/>
          }
          
        </div>
    )
}

export default Form