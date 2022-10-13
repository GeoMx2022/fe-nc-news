import styles from "../styling/Articles.module.css"

import ArticleList from "../components/ArticlesList";

export default function Articles() {
  return (
    <div>
        <div className={styles.articles__div}>
        <ArticleList className={styles.articles__articleList} />
      </div>
    </div>
  )
}
