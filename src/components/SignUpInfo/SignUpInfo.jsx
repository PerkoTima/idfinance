import React, { useState } from "react"
import Button from "../Button/Button";
import styles from "./SignUpInfo.module.scss"
import schema from '../../schema/schema.json'
import { useSelector, useDispatch } from "react-redux";
import { addSignUpInfoData } from "../../store/dataReducer";
import { personalInfoStep } from "../../store/stepReducer";

const SignUpInfo = () => {
    const inputsFromSchema = schema
    
    const dispatch = useDispatch()
    const signUpInfoData = useSelector(state => state.data.signUpInfo)
    const [signUp, setSignUp] = useState(signUpInfoData)

    const [repeatPassword, setRepeatPassword] = useState('')

    // const mask = (value) => {
    //     let x = value.match(/d{0,9}/g);
    //     console.log(x)
    //     value = '+375'
    //     // value = (!x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : ''));
    //     return value
    // }

    const validate = (e) => {
        e.preventDefault()
        if(
            signUp.password === repeatPassword
            && (new RegExp(inputsFromSchema["mobilePhone"]["regExp"])).test(signUp.mobilePhone)
            && (new RegExp(inputsFromSchema["email"]["regExp"])).test(signUp.email)
        ){
            dispatch(addSignUpInfoData(signUp))
            dispatch(personalInfoStep('personalInfo'))
        }else{
            if((new RegExp(inputsFromSchema["mobilePhone"]["regExp"])).test(signUp.mobilePhone)){
                return 0
            }
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
                    required={inputsFromSchema["mobilePhone"]["required"]}
                    placeholder="+375XXXXXXXXX"
                    type="phone"
                />
            </div>

            <div className={styles.input_wrapper}>
                <label className={styles.label} htmlFor="email">Email</label>
                <input
                    className={styles.input}
                    onChange={e => setSignUp({...signUp, email: e.target.value})}
                    value={signUp.email}
                    required={inputsFromSchema["email"]["required"]}
                    type="email"
                    placeholder="test@gmail.com"
                />
            </div>

            <div className={styles.input_wrapper}>
                <label className={styles.label} htmlFor="password">Password</label>
                <input
                    className={styles.input}
                    onChange={e => setSignUp({...signUp, password: e.target.value})}
                    minLength={inputsFromSchema["password"]["minLength"]}
                    maxLength={inputsFromSchema["password"]["maxLength"]}
                    value={signUp.password}
                    required={inputsFromSchema["password"]["required"]}
                    type="password"
                />
            </div>

            <div className={styles.input_wrapper}>
                <label className={styles.label} htmlFor="password">Repeat password</label>
                <input 
                    className={styles.input}
                    onChange={e => setRepeatPassword(e.target.value)}
                    minLength={inputsFromSchema["password"]["minLength"]}
                    maxLength={inputsFromSchema["password"]["maxLength"]}
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

