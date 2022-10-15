import styles from "../styling/ArticleFocusCard.module.css"

import { useState } from "react"

import { Link } from "react-router-dom"

import { patchVotes } from "../api/api"
import ErrorsPage from "../Error-handling/ErrorsPage"

export default function ArticleFocusCard({article, id}) {
  const [disableBtn, setDisableBtn] = useState(false);
  const [error, setError] = useState(null);
  const [voteCount, setVoteCount] = useState(0)

  const handleUpVotes = (event) => {
    event.preventDefault();
    setVoteCount((currVoteCount) => currVoteCount + 1) 
    setError(null)
    patchVotes(id, 1)
    .catch((err) => {
      setVoteCount((currVoteCount) => currVoteCount - 1)
      setError(err);
    }) 
    setDisableBtn(true)
  };

  const handleDownVotes = (event) => {
    event.preventDefault();
    setVoteCount((currVoteCount) => currVoteCount - 1) 
    setError(null)
    patchVotes(id, -1)
    .catch((err) => {
      setVoteCount((currVoteCount) => currVoteCount + 1)
      setError(err);
    })  
    setDisableBtn(true)
  };

  if (error) return <ErrorsPage errMsg={error.response.data.msg} />;    
  return (
    <div className={styles.articleFocusCard__div}>
      <h2>Title: {article.title}</h2>
      <p>Topic: {article.topic}</p>
      <p>Author: {article.author}</p>
      <p>Body: {article.body}</p>
      <p>Posted: {article.created_at}</p>
      <Link to={`/articles/${id}/comments`} className="articleFocusCard__Link">View Comments: {article.comment_count}</Link>
      <p>Votes: {voteCount + article.votes}</p>
      <button disabled={disableBtn} onClick={handleUpVotes}>👍</button>
      <button disabled={disableBtn} onClick={handleDownVotes}>👎</button>
    </div>
  )
}
