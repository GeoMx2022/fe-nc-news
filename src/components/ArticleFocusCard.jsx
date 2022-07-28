import styles from "../styling/ArticleFocusCard.module.css"

import { useState, useEffect } from "react"

import { Link } from "react-router-dom"

import { patchVotes } from "../api/api"

export default function ArticleFocusCard({article, id}) {
  const [disableBtn, setDisableBtn] = useState(false);
  const [err, setErr] = useState(null);
  const [voteCount, setVoteCount] = useState(0)

  const handleUpVotes = (event) => {
    event.preventDefault();
    setVoteCount((currVoteCount) => currVoteCount + 1) 
    setErr(null)
    patchVotes(id, 1).catch((err) => {
      setVoteCount((currVoteCount) => currVoteCount - 1)
      setErr('Something went wrong. Try again');
    }) 
    setDisableBtn(true)
  };

  const handleDownVotes = (event) => {
    event.preventDefault();
    setVoteCount((currVoteCount) => currVoteCount - 1) 
    setErr(null)
    patchVotes(id, -1).catch((err) => {
      setVoteCount((currVoteCount) => currVoteCount + 1)
      setErr('Something went wrong. Try again');
    })  
    setDisableBtn(true)
  };

  if (err) return <p>{err}</p>;
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
