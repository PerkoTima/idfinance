import React from "react";
import styles from "./Header.module.scss";
import logo from "../../images/snapchat-logo.svg"

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={logo} alt="ID Finance" className={styles.logo} />
        </header>
    )
}

export default Header