export default function ArticleFocusCard({article}) {
  return (
    <div>
      <h2>Title: {article.title}</h2>
      <p>Topic: {article.topic}</p>
      <p>Author: {article.author}</p>
      <p>Body: {article.body}</p>
      <p>Posted: {article.created_at}</p>
      <p>Comments: {article.comment_count}</p>
      <p>Votes: {article.votes}</p>
    </div>
  )
}
