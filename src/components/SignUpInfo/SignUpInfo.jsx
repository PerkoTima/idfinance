import React, { useState } from "react"
import Button from "../Button/Button";
import styles from "./SignUpInfo.module.scss"
import schema from '../../schema/schema.json'
import { useSelector, useDispatch } from "react-redux";
import { addSignUpInfoData } from "../../store/dataReducer";
import { personalInfoStep } from "../../store/stepReducer";
import Input from "../Input/Input";

const SignUpInfo = () => {
    const dispatch = useDispatch()
    const signUpInfoData = useSelector(state => state.data.signUpInfo)

    const [signUp, setSignUp] = useState(signUpInfoData)
    const [errorPhone, setErrorPhone] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPass, setErrorPass] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')

    const phoneRegExp = (new RegExp(schema["mobilePhone"]["regExp"]))
    const emailRegExp = (new RegExp(schema["email"]["regExp"]))

    const validate = (e) => {
        e.preventDefault()
        !phoneRegExp.test(signUp.mobilePhone) ? setErrorPhone('Phone is not correct') : setErrorPhone('')
        !emailRegExp.test(signUp.email) ? setErrorEmail('Email is not correct') : setErrorEmail('')
        !(signUp.password === repeatPassword) ? setErrorPass('Passwords do not match') : setErrorPass('')
        if(signUp.password === repeatPassword && phoneRegExp.test(signUp.mobilePhone) && emailRegExp.test(signUp.email)){
            dispatch(addSignUpInfoData(signUp))
            dispatch(personalInfoStep('personalInfo'))
        }
    }
    return (
        <form onSubmit={validate} noValidate className={styles.sign_up_wrapper}>
            <Input
                id='mobilePhone'
                label='Mobile Phone'
                value={signUp.mobilePhone}
                placeholder='+375XXXXXXXXX'
                type='tel'
                required={schema["mobilePhone"]["required"]}
                onChange={e => setSignUp({...signUp, mobilePhone: e.target.value})}
                error={errorPhone}
            />
            <Input
                id='email'
                label='Email'
                value={signUp.email}
                placeholder='test@test.com'
                type='email'
                required={schema["email"]["required"]}
                onChange={e => setSignUp({...signUp, email: e.target.value})}
                error={errorEmail}
            />
            <Input
                id='password'
                label='Password'
                value={signUp.password}
                type='password'
                minLength={schema["password"]["minLength"]}
                maxLength={schema["password"]["maxLength"]}
                required={schema["password"]["required"]}
                onChange={e => setSignUp({...signUp, password: e.target.value})}
            />
            <Input
                id='password2'
                label='Repeat password'
                value={repeatPassword}
                type='password'
                minLength={schema["password"]["minLength"]}
                maxLength={schema["password"]["maxLength"]}
                required
                onChange={e => setRepeatPassword(e.target.value)}
                error={errorPass}
            />
            <div className={styles.button_wrapper}>
                <Button buttonType={"submit"} buttonName="Next"/>
            </div>
        </form>
    )
}

export default SignUpInfo

