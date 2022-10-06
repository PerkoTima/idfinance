import React from "react";
import styles from './Modal.module.scss'
import { useSelector } from "react-redux";

const Modal = () => {

    const userData = useSelector(state => state.data)
    console.log(userData)

    return(
        <div className={styles.modal_wrapper}>
            <div>
                <p>Mobile Phone: <span>{userData.signUpInfo.mobilePhone}</span></p>
            </div>
            <div>
                <p>Email: <span>{userData.signUpInfo.email}</span></p>
            </div>
            <div>
                <p>Password: <span>{userData.signUpInfo.password}</span></p>
            </div>
            <div>
                <p>First Name: <span>{userData.personalInfo.firstName}</span></p>
            </div>
            <div>
                <p>Last Name: <span>{userData.personalInfo.lastName}</span></p>
            </div>
            <div>
                <p>Sex: <span>{userData.personalInfo.gender}</span></p>
            </div>
            <div>
                <p>Birthday: <span>{userData.personalInfo.birthday}</span></p>
            </div>
            <div>
                <p>Ocean: <span>{userData.personalInfo.ocean}</span></p>
            </div>
            <div>
                <p>Hobby: 
                    {userData.personalInfo.hobby.map((el, idx) => 
                        {if(userData.personalInfo.hobby.length === 1 || idx === userData.personalInfo.hobby.length - 1){
                            return <span className={styles.hobby} key={idx}>{el}</span>
                        }else{
                            return <span className={styles.hobby} key={idx}>{el},</span>
                        }}
                    )}
                </p>
                
            </div>
        </div>
    )
}

export default Modal