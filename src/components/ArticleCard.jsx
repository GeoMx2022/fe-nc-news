import styles from "../styling/ArticleCard.module.css"

import { Link } from "react-router-dom";

export default function ArticleCard({articles}) {
  return (
    <div className={styles.articleCard__div}>
      <strong>{articles.title}</strong>
      <pre><br className={styles.articlesCard__lineBreak}></br></pre>
      <p><strong>Topic: </strong>{articles.topic}</p>
      <p><strong>Author: </strong>{articles.author}</p>
      <Link to={`/articles/${articles.article_id}`}>View Article</Link>
    </div>
  )
}
