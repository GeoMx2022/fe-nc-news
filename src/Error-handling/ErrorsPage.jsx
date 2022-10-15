import styles from "../styling/ErrorsPage.module.css"

export default function ErrorsPage({errMsg}) {
  return (
    <div className={styles.errorsPage__div}>
      <h4>{errMsg}</h4>
    </div>
  )
}
