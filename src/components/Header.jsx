import styles from "../styling/Header.module.css"

import { Link } from "react-router-dom";

import logo from "../images/logo.png";

export default function Header() {
  return (
    <div className={styles.header__div}>
      <Link to="/"><img className={styles.logo} src={logo} alt="ViewsNews logo" /></Link>
    </div>
  )
}
