import styles from "../styling/ArticleCommentsCard.module.css"

import { useContext } from "react";
import { UserLoginContext } from "../contexts/UserLogin";

import DeleteComment from "./DeleteComment";

export default function ArticleCommentsCard({comment}) {
  const {userLogin} = useContext(UserLoginContext);

  return (
    <div className={styles.articleCommentsCard__div}>
      <p>{comment.body}</p>
      <p>Author: {comment.author}</p>
      <p>Votes: {comment.votes}</p>
      <p>Posted: {comment.created_at}</p>
      {comment.author === userLogin.username ? (
        <DeleteComment commentId={comment.comment_id}/>
      ) : <></>}
    </div>
  )
}
