import styles from "../styling/ArticleCard.module.css"

import { Link } from "react-router-dom";

export default function ArticleCard({articles}) {
  return (
    <div className={styles.articleCard__div}>
      <h2>Title: {articles.title}</h2>
      <p>Topic: {articles.topic}</p>
      <p>Author: {articles.author}</p>
      <p>Posted: {articles.created_at}</p>
      <p>Comments: {articles.comment_count}</p>
      <p>Votes: {articles.votes}</p>
    </div>
  )
}
