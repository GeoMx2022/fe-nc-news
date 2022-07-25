import styles from "../styling/Home.module.css"

import { Link } from "react-router-dom";

import Header from "../components/Header";
import UserLoginBox from "../components/UserLoginBox";

export default function Home() {
  return (
    <div className={styles.home__div}>
        <Header />
        <p className={styles.home__ptag}>Welcome to ViewsNews</p>
        <Link to="articles" className={styles.home__divEnterapp}>Click to Start</Link> 
    </div>
  )
}
