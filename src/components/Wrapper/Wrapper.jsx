import React from "react";
import styles from "./Wrapper.module.scss"
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Form from "../Form/Form";

const Body = () => {
    return(
        <div className={styles.wrapper}>
            <Breadcrumbs />
            <Form/>
        </div>
    )
}

export default Body