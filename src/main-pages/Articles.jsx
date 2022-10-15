import styles from "../styling/Articles.module.css"

import { useParams } from "react-router-dom"

import ArticleList from "../components/ArticlesList";

export default function Articles() {
  const { topic } = useParams();

  return (
    <div>
        <div className={styles.articles__div}>
        <ArticleList className={styles.articles__articleList} topic={topic}/>
      </div>
    </div>
  )
}
