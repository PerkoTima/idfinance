import React from "react";
import styles from "./Footer.module.scss";
import logo from "../../images/logo.svg"

const Header = () => {
    return (
        <footer className={styles.footer}>
            <img src={logo} alt="" className={styles.logo} />
        </footer>
    )
}

export default Header