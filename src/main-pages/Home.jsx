import styles from "../styling/Home.module.css"

import { Link } from "react-router-dom";

import Header from "../components/Header";

export default function Home() {
  return (
    <div className={styles.home__div}>
        <Header />
        <p className={styles.home__ptag1}>Welcome to ViewsNews</p>
        <p className={styles.home__ptag2}>Get the daily news and social commentary all in one place</p>
        <Link to="articles" className={styles.home__divEnterapp}>Click to Start</Link> 
    </div>
  )
}
