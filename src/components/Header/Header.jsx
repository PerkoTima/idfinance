import React from "react";
import styles from "./Header.module.scss";
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import logo from "../../images/logo.svg"

const Header = () => {
    return (
        <div>
        <header className={styles.header}>
            <img src={logo} alt="ID Finance" className={styles.logo} />
        </header>
        <Breadcrumbs />
        </div>
    )
}

export default Header