import React from "react";
import styles from "./Breadcrumbs.module.scss"

const Breadcrumbs = () => {
    return(
        <div className={styles.breadcrumb_wrapper}>
            <span className={styles.breadcrumb_item}>SignUpInfo</span>
            <span className={styles.right_arrow}>&#5171;</span>
            <span className={styles.breadcrumb_item}>PersonalInfo</span>
        </div>
    )
}

export default Breadcrumbs