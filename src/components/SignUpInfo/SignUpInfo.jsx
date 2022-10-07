import React, { useState } from "react"
import Button from "../Button/Button";
import styles from "./SignUpInfo.module.scss"
import schema from '../../schema/schema.json'
import { useSelector, useDispatch } from "react-redux";
import { addSignUpInfoData } from "../../store/dataReducer";
import { personalInfoStep } from "../../store/stepReducer";

const SignUpInfo = () => {
    
    const dispatch = useDispatch()
    const phoneRegExp = (new RegExp(schema["mobilePhone"]["regExp"]))
    const emailRegExp = (new RegExp(schema["email"]["regExp"]))
    const signUpInfoData = useSelector(state => state.data.signUpInfo)
    const [signUp, setSignUp] = useState(signUpInfoData)
    const [errorPhone, setErrorPhone] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')

    const validate = (e) => {
        e.preventDefault()
        !phoneRegExp.test(signUp.mobilePhone) ? setErrorPhone('Phone is not correct') : setErrorPhone('')
        !emailRegExp.test(signUp.email) ? setErrorEmail('Email is not correct') : setErrorEmail('')
        if(signUp.password === repeatPassword && phoneRegExp.test(signUp.mobilePhone) && emailRegExp.test(signUp.email)){
            dispatch(addSignUpInfoData(signUp))
            dispatch(personalInfoStep('personalInfo'))
        }
    }
    return (
        <form onSubmit={validate} className={styles.sign_up_wrapper}>

            <div className={styles.input_wrapper}>
                <label className={styles.label} htmlFor="mobilePhone">Mobile Phone</label>
                <input
                    className={styles.input}
                    onChange={e => setSignUp({...signUp, mobilePhone: e.target.value})}
                    value={signUp.mobilePhone}
                    required={schema["mobilePhone"]["required"]}
                    placeholder="+375XXXXXXXXX"
                    type="tel"
                />
                <div className={styles.error}>
                    {errorPhone}
                </div>
            </div>
            
            
            <div className={styles.input_wrapper}>
                <label className={styles.label} htmlFor="email">Email</label>
                <input
                    className={styles.input}
                    onChange={e => setSignUp({...signUp, email: e.target.value})}
                    value={signUp.email}
                    required={schema["email"]["required"]}
                    type="email"
                    placeholder="test@gmail.com"
                />
                <div className={styles.error}>
                    {errorEmail}
                </div>
            </div>
            

            <div className={styles.input_wrapper}>
                <label className={styles.label} htmlFor="password">Password</label>
                <input
                    className={styles.input}
                    onChange={e => setSignUp({...signUp, password: e.target.value})}
                    minLength={schema["password"]["minLength"]}
                    maxLength={schema["password"]["maxLength"]}
                    value={signUp.password}
                    required={schema["password"]["required"]}
                    type="password"
                />
            </div>

            <div className={styles.input_wrapper}>
                <label className={styles.label} htmlFor="password">Repeat password</label>
                <input 
                    className={styles.input}
                    onChange={e => setRepeatPassword(e.target.value)}
                    minLength={schema["password"]["minLength"]}
                    maxLength={schema["password"]["maxLength"]}
                    value={repeatPassword}
                    type="password"
                    required
                />
                {!(signUp.password === repeatPassword) &&
                    <span className={styles.err_pass}>Passwords do not match</span>
                }
            </div>
            
            <div className={styles.button_wrapper}>
                <Button buttonType={"submit"} buttonName="Next"/>
            </div>
        </form>
    )
}

export default SignUpInfo

