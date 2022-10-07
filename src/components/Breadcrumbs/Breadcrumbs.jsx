import React from "react";
import styles from "./Breadcrumbs.module.scss"
import { useSelector } from "react-redux";

const Breadcrumbs = () => {
    const step = useSelector(state => state.step)
    return(
        <div className={step === 'modal' ? styles.d_none : styles.breadcrumb_wrapper}>
            <span className={step === 'signUpInfo' ? styles.active : '' }>SignUp Info</span>
            <span className={styles.right_arrow}>&#5171;</span>
            <span className={step === 'personalInfo' ? styles.active : '' }>Personal Info</span>
        </div>
    )
}

export default Breadcrumbs