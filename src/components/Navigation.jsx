import styles from "../styling/Navigation.module.css"

import { Link, Outlet } from "react-router-dom";

export default function Navigation() {
  return (
    <div className={styles.navigation__div}>
      <Link to="/articles" className={styles.navigation__link1}>Articles</Link> 
      <Link to="/topics" className={styles.navigation__link2}>Topics</Link> 
      <Outlet />
    </div>
  )
}
