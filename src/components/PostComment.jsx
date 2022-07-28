import {useState, useContext } from "react";

import { UserLoginContext } from "../contexts/UserLogin";

import { postNewComment } from "../api/api";

export default function PostComment({id}) {
  const {userLogin, setUserLogin} = useContext(UserLoginContext);
  const [isPosted, setIsPosted] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [postedComment, setPostedComment] = useState({});
  const [isLoading, setIsLoading]  = useState(true);

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

   return (
    <div>

      <div>
        <form onSubmit={(event)=>{{handleSubmit(event)}}}>
          <label>Comment Text:<input value={newComment} onChange={(event) => setNewComment(event.target.value)}></input></label>
        </form>
        <button type="submit">Post Comment</button>
      </div>

      <div>
        {isPosted ? (
          <div className="postedItem">
            <p>Your Item has Been Added:</p>
            <p>{postedComment}</p>
          </div>
        ) :(
          <div className="failedToPost">
            <></>
          </div>
        )}
      </div>

    </div>
  )
}
