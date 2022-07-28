import styles from "../styling/ArticleCommentsCard.module.css"

export default function ArticleCommentsCard({comment}) {
  return (
    <div className={styles.articleCommentsCard__div}>
      <p>{comment.body}</p>
      <p>Author: {comment.author}</p>
      <p>Votes: {comment.votes}</p>
      <p>Posted: {comment.created_at}</p>
    </div>
  )
}
