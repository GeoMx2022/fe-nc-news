import styles from "../styling/CommentsCard.module.css"

import { useContext } from "react";
import { UserLoginContext } from "../contexts/UserLogin";

import DeleteComment from "./DeleteComment";

export default function CommentsCard({comment}) {
  const {userLogin} = useContext(UserLoginContext);

  return (
    <div className={styles.commentsCard__div}>
      <p>{comment.body}</p>
      <pre><br className={styles.commentsCard__lineBreak}></br></pre>
      <p><strong>Author: </strong>{comment.author}</p>
      <p><strong>Votes: </strong>{comment.votes}</p>
      <p><strong>Posted: </strong>{comment.created_at}</p>
      {comment.author === userLogin.username ? (
        <DeleteComment commentId={comment.comment_id} />
      ) : (
        <></>
      )}
    </div>
  );
}
