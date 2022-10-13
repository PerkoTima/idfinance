import React, { useRef, useState } from "react";
import Button from "../Button/Button";
import styles from "./PersonalInfo.module.scss"
import schema from '../../schema/schema.json'
import { useDispatch } from "react-redux";
import { modalStep, signUpStep } from "../../store/stepReducer";
import { addPersonalInfoData } from "../../store/dataReducer";
import Input from "../Input/Input";

const PersonalInfo = () => {
    const dispatch = useDispatch()

    const firstName = useRef()
    const lastName = useRef()
    const inputDate = useRef('2000-01-01')
    const inputOcean = useRef()
    const [gender, setGender] = useState()
    const [hobby, setHobby] = useState([])
    const [birthdayError, setBirthdayError] = useState('')
    const [hobbyError, setHobbyError] = useState('')
    const validate = (e) => {
        e.preventDefault()
        const under18 = new Date().getFullYear() - new Date(inputDate.current.value).getFullYear() < 18
        const over90 = new Date().getFullYear() - new Date(inputDate.current.value).getFullYear() > 90
        hobby.length <= 0 ? setHobbyError('No items selected') : setHobbyError('')
        if(under18) setBirthdayError('Your age is under 18')
        if(over90) setBirthdayError('Your age is over 90')
        
        if(!hobby.length <= 0 && !under18 && !over90){
            dispatch(addPersonalInfoData({
                firstName: firstName.current.value,
                lastName: lastName.current.value,
                gender: gender,
                birthday: inputDate.current.value,
                ocean: inputOcean.current.value,
                hobby: hobby
            }))
            dispatch(modalStep('modal'))
        }
    }

    const backToSignUp = () => {
        dispatch(signUpStep('signUp'))
    }

    const checkboxHandler = (el) =>el.target.checked ? setHobby([...hobby, el.target.value]) : setHobby(hobby.filter(e => e !== el.target.value))

    return (
        <form onSubmit={validate} className={styles.personal_info_wrapper}>

            <Input
                id='firstName'
                label='First Name'
                placeholder='John'
                type='text'
                required={schema["firstName"]["required"]}
                ref={firstName}
                minLength={schema["firstName"]["minLength"]}
                maxLength={schema["firstName"]["maxLength"]}
            />

            <Input
                id='lastName'
                label='Last Name'
                placeholder='Doe'
                type='text'
                required={schema["lastName"]["required"]}
                ref={lastName}
                minLength={schema["lastName"]["minLength"]}
                maxLength={schema["lastName"]["maxLength"]}
            />

            <div className={styles.radio_wrapper}>
                <p>Sex</p>
                <div className={styles.radio_inputs_wrapper}>
                    <div className={styles.radio_input_wrapper}>
                        <input
                            className={styles.radio}
                            id="man"
                            type="radio"
                            name="sex"
                            value="man"
                            onChange={e => setGender(e.target.value)}
                            required={schema["sex"]["required"]}
                        />
                        <label className={styles.label} htmlFor="man">man</label>
                    </div>
                    <div className={styles.radio_input_wrapper}>
                        <input
                            className={styles.radio}
                            type="radio"
                            id="woman"
                            name="sex"
                            value="woman"
                            onChange={e => setGender(e.target.value)} 
                        />
                        <label className={styles.label} htmlFor="woman">woman</label>
                    </div>
                </div>
            </div>
            <Input
                id='birthday'
                label='Birthday'
                type='date'
                required={schema["birthday"]["required"]}
                ref={inputDate}
                defaultValue="2000-01-01"
                error={birthdayError}
            />
            
            <div className={styles.select_wrapper}>
                <p>Your Favorite Ocean</p>
                <select required={schema["ocean"]["required"]} ref={inputOcean} >
                    {schema["ocean"]["oneOf"].map((e, idx) => <option key={`${e}${idx}`} value={e}>{e}</option>)}
                </select>
            </div>

            <div className={styles.checkbox_wrapper}>
                <p>Hobby</p>
                <div className={styles.checkboxes_wrapper}>
                {schema["hobby"]["anyOf"].map((el, idx) => 
                    <div key={`${el}${idx}`} className={styles.checkbox}>
                        <input
                            type="checkbox"
                            id={`hobby${idx}`}
                            name="hobby"
                            value={el}
                            onChange={(e) => checkboxHandler(e)}
                        />
                        <label htmlFor={`hobby${idx}`}>{el}</label>
                    </div>
                )}    
                </div>
            </div>
            <span className={styles.error}>{hobbyError}</span>
            <div className={styles.button_wrapper}>
                <Button buttonName="Change SingUp" handler={backToSignUp}/>
                <Button buttonType={"submit"} buttonName="Complete"/>
            </div>
        </form>
    )
}

export default PersonalInfo