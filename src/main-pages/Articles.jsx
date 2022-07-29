import styles from "../styling/Articles.module.css"

import ArticleList from "../components/ArticlesList";
import SortBy from "../components/SortBy";

export default function Articles() {
  return (
    <div>
        <div className={styles.articles__div}>
        <SortBy className={styles.articles__sortBy} />
        <ArticleList className={styles.articles__articleList} />
      </div>
    </div>
  )
}
