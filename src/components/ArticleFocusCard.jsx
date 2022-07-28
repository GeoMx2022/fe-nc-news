import { useState, useEffect } from "react"

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
    <div>
      <h2>Title: {article.title}</h2>
      <p>Topic: {article.topic}</p>
      <p>Author: {article.author}</p>
      <p>Body: {article.body}</p>
      <p>Posted: {article.created_at}</p>
      <p>Comments: {article.comment_count}</p>
      <p>Votes: {voteCount + article.votes}</p>
      <button disabled={disableBtn} onClick={handleUpVotes}>👍</button>
      <button disabled={disableBtn} onClick={handleDownVotes}>👎</button>
    </div>
  )
}
