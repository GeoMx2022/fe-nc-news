import styles from "../styling/Articles.module.css"

import ArticleList from "../components/ArticlesList";
import SortBy from "../components/SortBy";

export default function Articles() {
  return (
    <div className={styles.articles__div}>
      <SortBy id="sortBy" />
      <ArticleList id="articleList" />
    </div>
  )
}
