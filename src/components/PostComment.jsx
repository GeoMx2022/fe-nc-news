import {useState, useContext } from "react";

import { UserLoginContext } from "../contexts/UserLogin";

import { postNewComment } from "../api/api";

import ArticleCommentsCard from "./ArticleCommentsCard"

export default function PostComment({id}) {
  const {userLogin} = useContext(UserLoginContext);
  const [isPosted, setIsPosted] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [postedComment, setPostedComment] = useState({});
  const [isLoading, setIsLoading]  = useState(false);

  const handleSubmit = (event) => {   
    setIsPosted(false);
    event.preventDefault();
    setIsLoading(true)
    postNewComment(id, newComment, userLogin).then(data => {
      setPostedComment(data)
    });
    setIsLoading(false)
    setIsPosted(true);
  }

   if (isLoading) return (
    <div className="postComment__div--loading">
      <h2>Loading...</h2>
    </div>
   )

   if (isPosted) return (
    <div className="postedItem">
      <p>Your Comment has Been Added:</p>
      <ArticleCommentsCard comment={postedComment}/>
    </div>
   )

   return (
    <div>
      <div>
        <form onSubmit={(event)=>{handleSubmit(event)}}>
          <label>Comment Text:<textarea value={newComment} onChange={(event) => setNewComment(event.target.value)} required></textarea></label>
          <button type="submit">Post Comment</button>
        </form>
      </div>
    </div>
  )
}
